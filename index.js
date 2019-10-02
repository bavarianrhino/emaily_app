// import express from 'express'; //ES6 This makes use of 2016 modules and as far as this project goes we are using common imports
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 3000; // Heroku uses environment variables to tell us which port to use. Not needed if run on local machine, but handles if run on local machine
app.listen(PORT)

