// Exports a class, hence capital M on Mailer.js

const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

// We are setting up a class mail and extending it the property helper.Mail,
// which is an object which takes configuration that eventually spits out Mailer
// Mailer contains custom code and functionality that is inherited from the Mail object
// The Mail object comes from the sendgrid node_mod 
class Mailer extends helper.Mail {
    // any time new Mailer(...), first function called is the constructor
    constructor({ subject, recipients }, content) { // content is a HTML string from surveyTemplate
        super();

        // We do everything below in such a way because sendgrid says to do so
        //     - formatAddresses is a helper function below to iterate over the recipients subcollection
        //     which is an array of objects....in which to extract each recipient email
        this.sgApi = sendgrid(keys.sendGridKey)
        this.from_email = new helper.Email('ryan-riesenberger-no-reply@emaily.com');
        this.subject = subject;
        this.body = new helper.Context('text/html', content);
        this.recipients = this.formatAddresses(recipients); // Array of helper email objects

        this.addContent(this.body) // Mail base class has built in functions
        this.addClickTracking();
        this.addRecipients();
    }

    formatAddresses(recipients) {
        return recipients.map(({ email }) => {
            return new helper.Email(email);
        })
    }

    // Sendgrid Documentation for code below basically states this is what you need to do...so write this code
    // Not much explanation on what's going on behind the scenes
    addClickTracking() {
        const trackingSettings = new helper.TrackingSettings();
        const clickTracking = new helper.ClickTracking(true, true);

        trackingSettings.setClickTracking(clickTracking);
        this.addTrackingSettings(trackingSettings);
    }

    // Helper function that takes the array of helper email objects that were first run through,
    // formatAddresses and does strange sendgrid things...
    addRecipients() {
        const personalize = new helper.Personalization();

        this.recipients.forEach(recipient => {
            personalize.addTo(recipient);
        })
        this.addPersonalization(personalize)
    }

    // Function that takes this entire Mailer and sends it to sendGrid
    async send() {
        const request = this.sgApi.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: this.toJSON()
        });

        const response = this.sgApi.API(request); //This is the 'thing' that actually sends it off to sendgrid
        return response;
    }
}
module.exports = Mailer;