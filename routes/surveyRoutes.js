// Sometimes when you use mongoose with testing framework it will complain if you call in a model multiple times
const mongoose = require('mongoose')

const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer')
const surveyTemplate = require('../services/emailTemplates/surveyTemplate')

// Added for testing framework scalability
const Survey = mongoose.model('surveys');

module.exports = app => {
    // 2 things to vet about user before hooking up.
    // first user needs to be logged in and authenticated - use middleware 
    // second that user has enough credits 
    // After testing full email post, we then complete it as an async process because we do not want to save the survey,
    // until we verify that all emails provided are 'good' and that they were all sent.
    
    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
        const { title, subject, body, recipients } = req.body;

         // Model class creates an instance of a survey and not persisted to the database...to save it, gotta call save()
         // Sub-Document collection of recipients - array of objects containing users email with responded property defaulting to false
        //    Take list of emails and use split to give us an array of strings and then map over it to assign in a object
        const survey = new Survey({
            title: title, //ES6 can reduce it down to just title
            subject: subject,
            body: body,
            recipients: recipients.split(',').map(email => { return { email: email.trim() }}),
            _user: req.user.id,
            dateSent: Date.now() 
        })

        // Good place to send an email
        // First arg is a object with subject property and a recipients property
        // Second arg is an object containing HTML to use in body of email 
        const mailer = new Mailer(survey, surveyTemplate(survey));

        // Below code creates multiple opportunites for errors
        // Implement catch all error to notify user
        try {
            await mailer.send(); // Once mailer has sent all surveys successfully we then save that survey
            await survey.save();

            // Once survey is successfully saved, we know one credit was successfully used so we subtract from users credits
            // and then we update user.
            req.user.credits -= 1;
            const user = await req.user.save(); //Wait to save and receive new updated user
            res.send(user); //Sending back user model here so that a users credits is automatically updated.
        } catch (error) {
            res.status(422).send(error)
        }
    })
};
// ES6 Reduces to = recipients: recipients.split(',').map(email => ({ email })
// _user: req.user.id - The id is automatically generated by mongoose model