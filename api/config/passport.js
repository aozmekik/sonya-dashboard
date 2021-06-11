const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('User');

passport.use(new LocalStrategy({
    usernameField: 'email'
},
    (username, password, done) => {
        User.findOne({ email: username }, (err, user) => {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, {
                    errorCode: 1, // incorrect email
                });
            }
            if (!user.validPassword(password)) {
                return done(null, false, {
                    errorCode: 1, // incorrect password
                });
            }
            if (user.emailNotConfirmed()) {
                return done(null, false, {
                    errorCode: 2, // unconfirmed email
                })
            }
            if (user.userNotConfirmed()) {
                return done(null, false, {
                    errorCode: 3, // unconfirmed user
                })
            }

            return done(null, user);
        });
    }
));