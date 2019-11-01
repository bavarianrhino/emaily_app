
const regExEmailValidation = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default (recipients) => {
    const invalidEmailsArr = recipients
        .split(',')
        .map(email => email.trim())
        .filter(email => regExEmailValidation.test(email) === false)
    
    if (invalidEmailsArr.length) {
        return `These emails are invalid: ${invalidEmailsArr}`;
    }
    return;
}