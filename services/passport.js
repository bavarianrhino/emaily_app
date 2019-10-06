const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users')

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback' //third option/argument is the path url that the user is sent to after granting permission from google server
		},
		(accessToken, refreshToken, profile, done) => {
            // console.log('Access Token', accessToken); // console.log('Refresh Token', refreshToken); // console.log('Profile', profile);
            User.findOne({ googleId: profile.id }).then((existingUser) => {
                if (existingUser) {
                    // if true, we already have an existing user with given profile.id
                    done(null, existingUser); // First arg is an error object that communicates to passport that something was wrong, second is the user record saying this is what we found for a record
                } else {
                    // we don't have a user record with this ID, make a new record.
                    new User({ googleId: profile.id }) // This creates a new model instance (represents a single record)
						.save() // we then save that instance
						.then((user) => done(null, user))
						.catch((e) => {
							console.log('ERROR Saving New User: ', e.message);
						});
                        //In this call back, this returns a second instance of the exact record made earlier but use this as one as final because may have additional changes
                }
            }).catch((e) => {
                console.log('ERROR Finding One User Profile ID: ', e.message)
            })
		}
	)
);
