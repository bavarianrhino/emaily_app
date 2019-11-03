// ================== REQUIRED MODULES ==================//
const express = require('express');
const mongoose = require('mongoose')
const cookieSession = require('cookie-session');
const passport = require('passport') //
const keys = require('./config/keys')
const bodyParser = require('body-parser');

// ================== SCHEMA IMPORT ==================//
require('./models/User'); 
require('./models/Survey');
require('./services/passport');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI)

// ================== CREATE APPLICATION ==================//
const app = express();

// ================== CREATE MODEL ==================//
const Survey = mongoose.model('surveys');
const User = mongoose.model('users');

// ================== AUTH & COOKIES ==================//
app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 1000, 
        keys: [keys.cookieKey] 
    })
);
app.use(passport.initialize());
app.use(passport.session());

// ================== ROUTES PASSED TO APP ==================//
require('./routes/authRoutes')(app); 
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

// ================== CONNECT ==================//
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    const path = require('path')
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

// ================== SET PORT ==================//
const PORT = process.env.PORT || 3001; 
app.listen(PORT)

// ************************************
// Notes can be found in consolelog.js 
// ************************************