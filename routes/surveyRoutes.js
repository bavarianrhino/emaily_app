// Sometimes when you use mongoose with testing framework it will complain if you call in a model multiple times
const mongoose = require('mongoose')

const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

// Added for testing framework scalability
const Survey = mongoose.model('surveys');

module.exports = app => {
    // 2 things to vet about user before hooking up.
    // first user needs to be logged in and authenticated - use middleware 
    // second that user has enough credits 
    app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
        const { title, subject, body, recipients } = req.body;

         // Model class creates an instance of a survey and not persisted to the database...to save it, gotta call save()
        const survey = new Survey({
            title: title, //ES6 can reduce it down to just title
            subject: subject,
            body: body,
            // Subdocument collection goes here
        })
    })
};