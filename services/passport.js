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
            new User({ googleId: profile.id }).save();
			// console.log('Access Token', accessToken);
			// console.log('Refresh Token', refreshToken);
			// console.log('Profile', profile);
		}
	)
);
