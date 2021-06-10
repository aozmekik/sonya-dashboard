const passport = require('passport');
const mongoose = require('mongoose');
var nodemailer = require('nodemailer');
const { body, validationResult } = require('express-validator');

const User = mongoose.model('User');
const Token = mongoose.model('Token');

const emailSender = (mailOptions, callback) => {
    const transporter = nodemailer.createTransport({
        port: 465,               // true for 465, false for other ports
        host: 'smtp.gmail.com',
        auth: {
            user: process.env.GMAIL_USERNAME,
            pass: process.env.GMAIL_PASSWORD,
        },
        secure: true,
    });


    transporter.sendMail(mailOptions, callback);

};


const register = (req, res) => {
    // FIXME. this is not working. delete them.
    body('name', 'Name cannot be blank').notEmpty();
    body('email', 'Email is not valid').notEmpty().isEmail();
    body('password', 'Password must be at least 4 characters long').notEmpty().isLength({ min: 5 });


    // Check for validation errors    
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    User.findOne({ email: req.body.email }, (err, user) => {
        if (user) {
            return res.status(500).json({ msg: 'The email already exists' });
        }

        user = new User();
        user.name = req.body.name;
        user.email = req.body.email;
        user.role = 0; // each user starts as guest.
        user.status = 0; // each user starts in status: unconfirmed e-mail.
        user.towns = [2048];
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
                        from: process.env.GMAIL_USERNAME,
                        to: user.email,
                        subject: 'Account Verification Token',
                        text: 'Hello,\n\n' + 'Please verify your account by clicking the link: \nhttp:\/\/' + req.headers.host + '\/api/confirm\/' + token.token + '.\n'
                    };

                    emailSender(mailOptions, (err) => {
                        if (err)
                            return res.status(500).json({ msg: err.message });
                        res.status(200).json({ msg: 'A verification email has been sent to ' + user.email + '.' });
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
            if (user.emailConfirmed())
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
    body('email', 'Email is not valid').isEmail();
    body('email', 'Email cannot be blank').notEmpty();
    req.sanitize('email').normalizeEmail({ remove_dots: false });

    // check for validation errors    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

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
                from: process.env.GMAIL_USERNAME,
                to: user.email,
                subject: 'Account Verification Token',
                text: 'Hello,\n\n' + 'Please verify your account by clicking the link: \nhttp:\/\/' + req.headers.host + '\/api/confirm\/' + token.token + '.\n'
            };

            emailSender(mailOptions, (err) => {
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