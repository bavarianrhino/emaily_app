
const express = require('express');
const mongoose = require('mongoose')
const cookieSession = require('cookie-session');
const passport = require('passport') // Tells passport to keep of track of user authentication state by using cookie session - NOT FOR GOOGLE AUTH
const keys = require('./config/keys')
const bodyParser = require('body-parser');
require('./models/User'); // Shorthand for const passportConfig = require('./services/passport');
require('./services/passport');

mongoose.connect(keys.mongoURI)

const app = express();

app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 1000, //30days 24hours 60mins/hr 1000ms/min
        keys: [keys.cookieKey] // Encrypts time so cannot be manually changed, and array is always used if dev wants to use multiple keys from list that are randomly selected
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app); // Short for const authRoutes = require('./routes/authRoutes'); authRoutes(app);
require('./routes/billingRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    // Need to make sure Express serves up production assets in Heroku
    // Directly Below - If and get request comes in for some route or some file and we don't know what it is,
    // it will direct it to the client/build directory to see if there's a file that matches the request at hand.
    app.use(express.static('client/build'))

    // Express will serve ip the index.html file if it doesn't recognize the route, we will assume the react-router side is
    // responsible and we'll kick the user to the client side. **THIS IS OUR CATCH ALL FOR REQUESTS**
    const path = require('path')
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 3001; // Heroku uses environment variables to tell us which port to use. Not needed if run on local machine, but handles if run on local machine
app.listen(PORT)

// app.get('/', (req, res) => {
//     res.send({ bye: 'buddy' });
// });
