// Used lowercase to name this file because it only returns a function
// From www.emailregex.com
const regExEmailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default (recipients) => {
    const emailsArr = recipients.split(',').map(email => {
        console.log(email)
        email.trim().filter(email => {
            // returns a boolean, but we want to keep emails that are false to notify user
            return regExEmailValidation.test(email) === false
        })
    });
    console.log(emailsArr)
}

