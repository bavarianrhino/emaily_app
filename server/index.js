// import express from 'express'; //ES6 This makes use of 2016 modules and as far as this project goes we are using common imports
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});

app.listen(3000)

