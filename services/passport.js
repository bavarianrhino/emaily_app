const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users')

// Creates identifying data for user record logging in
passport.serializeUser((user, done) => { //This is the user instance created or retrieved from existing record from logic below
    done(null, user.id)  //user.id is automatically made and assigned when record is made in mongo...like what rails/activeRecord does
    // mongoDB shows record as _id:ObjectId("5d98212e856da17b9e522bcc") ... this can be referenced as simply user.id
})

passport.deserializeUser((id, done) => { //This is now an ID that we want to turn back into a user model instance
    User.findById(id).then(user => {
        done(null, user);
    }).catch((e) => {
		console.log('ERROR Returning User after deserializeUser: ', e.message);
	});
})

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
