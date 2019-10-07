const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users')

// Creates identifying data for user record logging in
//This is the user instance created or retrieved from existing record from logic below
passport.serializeUser((user, done) => {
    // user is automatically made and assigned when record is made in mongo
    // and given unique ID...like what rails/activeRecord does
    done(null, user)
    // mongoDB shows record as _id:ObjectId("5d98212e856da17b9e522bcc")
    // ... this can be referenced as simply user
})

//This is now an ID that we want to turn back into a user model instance
passport.deserializeUser((id, done) => {
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
			callbackURL: '/auth/google/callback',
			proxy: true
		},
		async (accessToken, refreshToken, profile, done) => {
            const existingUser = await User.findOne({ googleId: profile.id })
            
            if (existingUser) {
                return done(null, existingUser);
            } // else execute below 
            
            const user = await new User({ googleId: profile.id }).save()
            done(null, user)
        }
    )
);
