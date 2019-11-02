const _ = require('lodash')
const { Path } = require('path-parser')
const { URL } = require('url')
const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer')
const surveyTemplateCSS = require('../services/emailTemplates/surveyTemplateCSS')

const Survey = mongoose.model('surveys');

module.exports = app => {

    app.get('/api/surveys', async (req, res) => {
        const surveys = await Survey.find({ _user: req.user.id }).select({ recipients: false })
        
        res.send(surveys);
    })

    app.delete('/api/surveys/delete/:surveyId', requireLogin, async (req, res) => {
        const p = new Path('/api/surveys/delete/:surveyId'),
            fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
      
            const match = p.test(new URL(fullUrl).pathname);
        try {
            await Survey.deleteOne({ _id: match.surveyId});

            res.send({});
        } catch (error) {
            res.status(422).send(error)
        }
    });

    app.get('/api/surveys/:surveyId/:choice', (req, res) => {
        res.send("Thanks for the feedback!")
    })
       
    app.post('/api/surveys/webhooks', (req, res) => {
        const p = new Path('/api/surveys/:surveyId/:choice')
        console.log(req)
        console.log(req.body)

        _.chain(req.body)
            .map(({ email, url }) => {
                const match = p.test(new URL(url).pathname)
                if (match) {
                    return { email, surveyId: match.surveyId, choice: match.choice }
                }
            })
            .compact()
            .uniqBy('email', 'surveyId')
            .each(({ surveyId, email, choice }) => { 
                Survey.updateOne(
                    {
                        _id: surveyId,
                        recipients: {
                            $elemMatch: { email: email, responded: false }
                        }
                    },
                    {
                        $inc: { [choice]: 1 },
                        $set: { 'recipients.$.responded': true },
                        emailsResponses: {
                            $push: { 
                                [choice]: {
                                    email: email
                                }
                            }
                        },
                        lastResponded: new Date()
                    }
                ).exec();
            })
            .value();
        res.send({});
    })

    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
        const { title, subject, body, recipients } = req.body;

        const survey = new Survey({
            title: title, 
            subject: subject,
            body: body,
            recipients: recipients.split(',').map(email => { return { email: email.trim() }}),
            _user: req.user.id,
            dateSent: Date.now() 
        })

        const mailer = new Mailer(survey, surveyTemplateCSS(survey));

        try {
            await mailer.send(); 
            await survey.save();

            req.user.credits -= 1;
            const user = await req.user.save(); 
            res.send(user); 
        } catch (error) {
            res.status(422).send(error)
        }
    })
};

// ************************************
// Notes can be found in consolelog.js 
// ************************************