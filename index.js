
const express = require('express');
const mongoose = require('mongoose')
const cookieSession = require('cookie-session');
const passport = require('passport') // Tells passport to keep of track of user authentication state by using cookie session - NOT FOR GOOGLE AUTH
const keys = require('./config/keys')
require('./models/User'); // Shorthand for const passportConfig = require('./services/passport');
require('./services/passport');

mongoose.connect(keys.mongoURI)

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 1000, //30days 24hours 60mins/hr 1000ms/min
        keys: [keys.cookieKey] // Encrypts time so cannot be manually changed, and array is always used if dev wants to use multiple keys from list that are randomly selected
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app); // Short for const authRoutes = require('./routes/authRoutes'); authRoutes(app);

const PORT = process.env.PORT || 3000; // Heroku uses environment variables to tell us which port to use. Not needed if run on local machine, but handles if run on local machine
app.listen(PORT)

// app.get('/', (req, res) => {
//     res.send({ bye: 'buddy' });
// });
