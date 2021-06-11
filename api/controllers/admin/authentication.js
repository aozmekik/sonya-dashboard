
const passport = require('passport');
const mongoose = require('mongoose');
// const User = mongoose.model('User');
// const Token = mongoose.model('Token');


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
            if (user.role != 3)
                return res.status(404).json({ msg: 'No admin permissions' });
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

module.exports = {
    login
};
