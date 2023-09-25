// passport-config.js

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const db = require('./models')

function initialize(passport) {
    passport.use(
        new LocalStrategy({ usernameField: 'email', passwordField: 'password' }, async (email, password, next) => {
            // Replace this with your database query to find the user by email
            const user = await db.User.findOne({ email });

            if (!user) {
                return next(null, false, { message: 'User not found' });
            }

            try {
                if (await bcrypt.compare(password, user.password)) {
                    return next(null, user);
                } else {
                    return next(null, false, { message: 'Password incorrect' });
                }
            } catch (error) {
                return next(error);
            }
        })
    );

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        // Replace this with your database query to find the user by ID
        const user = await db.User.findById(id);
        done(null, user);
    });
}

module.exports = initialize;
