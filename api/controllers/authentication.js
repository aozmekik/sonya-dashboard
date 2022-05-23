const passport = require('passport');
const mongoose = require('mongoose');
const Utils = require('./utils');
const User = mongoose.model('User');
const Token = mongoose.model('Token');

const credentials = require('../../credentials.json');

const register = (req, res) => {
    if (!req.body.name && !req.body.email && !req.body.password)
        return res.status(400).json({ msg: 'Fields are missing' });
    if (req.body.password.length < 8)
        return res.status(400).json({ msg: 'Password too short' });

    User.findOne({ email: req.body.email }, (err, user) => {
        if (user) {
            return res.status(500).json({ msg: 'The email already exists' });
        }

        user = new User();
        user.name = req.body.name;
        user.email = req.body.email;
        user.role = 0; // each user starts as guest.
        user.status = 0; // each user starts in status: unconfirmed e-mail.
        user.towns = [];
        user.image = null;
        user.setPassword(req.body.password);
        user.save((err) => {
            if (err) {
                res
                    .status(400)
                    .json(err);
            } else {
                const token = new Token();
                token.generate(user._id);
                token.save((err) => {
                    if (err)
                        return res.status(500).json({ msg: err.message });

                    const mailOptions =
                    {
                        from: credentials.GMAIL_USERNAME,
                        to: user.email,
                        subject: 'Hesap Onaylama',
                        text: 'Merhaba ' + `${user.name},\n\n` + 'Lütfen aşağıdaki linke tıklayarak hesabınızı onaylayınız: \nhttp:\/\/' + req.headers.host + '\/api/confirm\/' + token.token + '.\n\nİyilik Rengi Derneği\n'
                    };

                    Utils.emailSender(mailOptions, (err) => {
                        if (err)
                            return res.status(500).json({ msg: err.message });
                        res.status(200).json({ msg: 'E-Posta hesabına doğrulama link gönderildi: ' + user.email + '.' });
                    });
                });

            }
        });


    });


};

const login = (req, res) => {
    if (!req.body.email && !req.body.password)
        return res.status(400).json({ msg: 'Fields are missing' });
    if (req.body.password.length < 8)
        return res.status(400).json({ msg: 'Password too short' });

    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return res
                .status(404)
                .json(err);
        }
        if (user) {
            if (user.role == 3)
                return res.status(401).json({ errorCode: 4 });
            const token = user.generateJwt();
            res
                .status(200)
                .json({ user: user.clean(), token: token });
        } else {
            res
                .status(401)
                .json(info);
        }
    })(req, res);
};


const restore = (req, res) => {
    let _id = null;
    try {
        _id = User.getIDfromJWT(req.params.token);
    } catch (err) {
        return res.status(500).json(err);
    }

    User.findOne({ _id: _id }, (err, user) => {
        if (err)
            return res.status(400).json(err);
        if (!user)
            return res.status(400).json({ type: 'restore', msg: 'Unvalid token. Your token my have expired.' });

        return res.status(200).json(user.clean());
    })
};

const confirm = (req, res, next) => {
    let _id = null;
    try {
        _id = User.getIDfromJWT(req.params.token);
    } catch (err) {
        return res.status(500).json(err);
    }

    // find a matching token
    Token.findOne({ _id: _id }, (err, token) => {
        if (!token)
            return res.status(400).json({ type: 'not-verified', msg: 'We were unable to find a valid token. Your token my have expired.' });


        // if we found a token, find a matching user
        User.findOne({ _id: token.userId }, (err, user) => {
            if (!user)
                return res.status(400).json({ msg: 'We were unable to find a user for this token.' });
            if (!user.emailNotConfirmed())
                return res.status(400).json({ type: 'already-verified', msg: 'This user has already been verified.' });

            // verify and save the user
            user.status = 1;
            user.save((err) => {
                if (err)
                    return res.status(500).json({ msg: err.message });
                return res.status(200).json({ msg: 'The account has been verified. Please log in.' });
            });
        });
    });
};

const resend = (req, res, next) => {
    if (!req.body.name && !req.body.email && !req.body.password)
        return res.status(400).json({ msg: 'Fields are missing' });
    if (req.body.password.length < 8)
        return res.status(400).json({ msg: 'Password too short' });

    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user)
            return res.status(400).json({ msg: 'We were unable to find a user with that email.' });
        if (user.isVerified)
            return res.status(400).json({ msg: 'This account has already been verified. Please log in.' });

        // create a verification token, save it, and json email
        const token = new Token();
        token.generate(user._id);

        // save the token
        token.save((err) => {
            if (err)
                return res.status(500).json({ msg: err.message });

            const mailOptions =
            {
                from: credentials.GMAIL_USERNAME,
                to: user.email,
                subject: 'Şifre Yenileme',
                text: 'Merhaba ' + `${user.name},\n\n` + 'Lütfen aşağıdaki linke tıklayarak şifre değiştirme talebini onaylayınız: \nhttp:\/\/' + req.headers.host + '\/api/confirm\/' + token.token + '.\n\nİyilik Rengi Derneği\n'
            };

            Utils.emailSender(mailOptions, (err) => {
                if (err)
                    return res.status(500).json({ msg: err.message });
                res.status(200).json({ msg: 'A verification email has been sent to ' + user.email + '.' });
            });
        });

    });
};


module.exports = {
    register,
    login,
    confirm,
    resend,
    restore,
};