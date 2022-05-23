const crypto = require('crypto');
var mongoose = require('mongoose');
const Utils = require('./utils');
const Token = mongoose.model('Token');

const credentials = require('../../credentials.json');


const forgot = (req, res, next) => {
    if (!req.body.email)
        return res.status(400).json({ msg: 'Fields are missing' });

    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user)
            return res.status(400).json({ msg: 'We were unable to find a user with that email.' });

        const token = new Token();
        token.generate(user._id);
        token.save((err) => {
            if (err)
                return res.status(500).json({ msg: err.message });
            const mailOptions =
            {
                from: credentials.GMAIL_USERNAME,
                to: user.email,
                subject: 'Şifre Yenileme',
                text: 'Merhaba ' + `${user.name},\n\n` + 'Lütfen linke tıklayarak şifre değiştirme talebini onaylayınız: \nhttp:\/\/' + req.headers.host + '\/api/reset\/' + token.token + '\n\nİyilik Rengi Derneği\n'
            };

            Utils.emailSender(mailOptions, (err) => {
                if (err)
                    return res.status(500).json({ msg: err.message });
                res.status(200).json({ msg: 'A verification email has been sent to ' + user.email + '.' });
            });

        });

    });
};


const reset = (req, res, next) => {
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

            const newPassword = crypto.randomBytes(10).toString('hex');
            user.setPassword(newPassword);
            user.save((err) => {
                if (err)
                    return res.status(500).json({ msg: err.message });

                const mailOptions =
                {
                    from: credentials.GMAIL_USERNAME,
                    to: user.email,
                    subject: 'Yeni Şifreniz',
                    text: 'Merhaba ' + `Merhaba ${user.name},\n\nYeni Şifreniz: ${newPassword}\n Mobil uygulamadan şifreyi değiştirmeyi unutmayınız.\nİyilik Rengi Derneği\n`
                };

                emailSender(mailOptions, (err) => {
                    if (err)
                        return res.status(500).json({ msg: err.message });
                    // one time used url
                    Token.deleteOne({ _id: _id }); 
                    return res.status(200).json({ msg: 'E-Mail adresinize yeni şifreniz gönderildi.' });
                });
            });
        });
    });
};

const change = (req, res, next) => {
    if (!req.body.old && !req.body.password)
        return res.status(400).json({ msg: 'Fields are missing' });


    let _id = null;
    try {
        _id = Utils.getUserID(req);
    } catch (err) {
        return res.status(500).json(err);
    }

    // if we found a token, find a matching user
    User.findOne({ _id: _id }, (err, user) => {
        if (!user)
            return res.status(400).json({ msg: 'We were unable to find the user.' });
        if (!user.validPassword(req.body.old))
            return res.status(404).json({ msg: 'Wrong password' });


        user.setPassword(req.body.password);
        user.save((err) => {
            if (err)
                return res.status(500).json({ msg: err.message });

            const mailOptions =
            {
                from: credentials.GMAIL_USERNAME,
                to: user.email,
                subject: 'Yeni Şifreniz',
                text: 'Merhaba ' + `${user.name},\n\n` + 'Şifreniz değiştirilmiştir.\nİyilik Rengi Derneği\n'
            };

            emailSender(mailOptions, (err) => {
                if (err)
                    return res.status(500).json({ msg: err.message });
                return res.status(200).json({ msg: 'Password changed' });
            });
        });
    });
};

module.exports = {
    forgot,
    reset,
    change
};

