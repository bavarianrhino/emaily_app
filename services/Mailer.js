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
        this.from_email = new helper.Email('ryanriesenberger-no-reply@emaily.com');
        this.subject = subject;
        this.body = new helper.Context('text/html', content);
        this.recipients = this.formatAddresses(recipients);
        // formatAddresses is a helper function below to iterate over the recipients subcollection
        // which is an array of objects....in which to extract each recipient email
    }

    formatAddresses(recipients) {
        return recipients.map(({ email }) => {
            return new helper.Email(email);
        })
    }
}
module.exports = Mailer;