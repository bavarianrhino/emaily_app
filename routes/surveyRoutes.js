const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

module.exports = app => {
    // 2 things to vet about user before hooking up.
    // first user needs to be logged in and authenticated - use middleware 
    // second that user has enough credits 
    app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {

    })
};