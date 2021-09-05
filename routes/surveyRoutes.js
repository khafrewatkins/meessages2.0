const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

const Survey = mongoose.model('surveys');

module.exports = app => {
    // when a post comes in to api/surveys run the req arrow function
    // and capture the res (response) also the requireLogin does not include
    // the () because it is not being called until the request on api/surveys 
    // happens and it is in order to check if the user is logged in.
    app.post('/api/surveys', requireLogin, requireCredits (req, res) => {
        const { title, subject, body, recipients } = req.body;

        const survey = new Survey({
            title,
            subject,
            body,
            recipients: recipients.split(',').map(email => ({ email: email.trim() }));
            _user: req.user.id,
            dateSent: Date.now()
        });

    })
}