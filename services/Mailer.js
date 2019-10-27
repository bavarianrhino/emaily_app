// Exports a class, hence capital M on Mailer.js

const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

// We are setting up a class mail and extending it the property helper.Mail,
// which is an object which takes configuration that eventually spits out Mailer
// Mailer contains custom code and functionality that is inherited from the Mail object
// The Mail object comes from the sendgrid node_mod 
class Mailer extends helper.Mail {
    // Going to pretend this is done to see where it would be used.
}
module.exports = Mailer;