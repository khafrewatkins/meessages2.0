const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
    app.post('/api/stripe', requireLogin, async (req, res) => {
      
      const charge = await stripe.charges.create({
          amount: 500,
          currency: 'usd',
          description: 'five dollars for five credits',
        //   use the id from the body of the request that is 
        // handled by the middleware - express.json - that puts 
        // everything from the request (req) in the body 
          source: req.body.id
          
      });
// access the specific logged in user in this request
// and add five creds to their account
     req.user.credits += 5;
    //  save the update to the user
    const user = await req.user.save();
    // send the updated user back to the browser
    res.send(user);

    });
    
};