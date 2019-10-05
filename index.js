
// import express from 'express'; //ES6 This makes use of 2016 modules and as far as this project goes we are using common imports
const express = require('express');
const mongoose = require('mongoose')
const keys = require('./config/keys')
// const passportConfig = require('./services/passport'); // This is shortend to line below
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI)

const app = express();

// const authRoutes = require('./routes/authRoutes')
// authRoutes(app);
require('./routes/authRoutes')(app); // Replaces and short for above lines



// passport.use(
//     new GoogleStrategy(
//         {
//             clientID: keys.googleClientID,
//             clientSecret: keys.googleClientSecret,
//             callbackURL: '/auth/google/callback' //third option/argument is the path url that the user is sent to after granting permission from google server
//         }, (accessToken, refreshToken, profile, done) => {
//             console.log('Access Token', accessToken);
//             console.log('Refresh Token', refreshToken);
//             console.log('Profile', profile);
//         }
//     )
// );

// app.get('/auth/google', passport.authenticate('google', {
//         scope: ['profile', 'email']
//     })
// );

// app.get('/auth/google/callback', passport.authenticate('google'));


const PORT = process.env.PORT || 3000; // Heroku uses environment variables to tell us which port to use. Not needed if run on local machine, but handles if run on local machine
app.listen(PORT)

// app.get('/', (req, res) => {
//     res.send({ bye: 'buddy' });
// });
