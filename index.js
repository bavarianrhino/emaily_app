// app.get('/', (req, res) => {
//     res.send({ bye: 'buddy' });
// });


// import express from 'express'; //ES6 This makes use of 2016 modules and as far as this project goes we are using common imports
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

passport.use(new GoogleStrategy());


const PORT = process.env.PORT || 3000/; // Heroku uses environment variables to tell us which port to use. Not needed if run on local machine, but handles if run on local machine
app.listen(PORT)

