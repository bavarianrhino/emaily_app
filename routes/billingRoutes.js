const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

// Express allows the use of multiple middlewares to be used as long as request is handled
module.exports = app => {
    app.post('/api/stripe', requireLogin, async (req, res) => {

        // Below works in checking that a user is logged in before purchase
        // Going to refactor into middleware on index.js to be used by other components
        // if (!req.user) {
        //     return res.status(401).send({ error: "Please login in to purchase!"})
        // }

        // console.log(req.body) //Body shown below
        // Amount is specified second time here to actually charge customer,
        // amount of 500 on front end is to gain authorization from stripe.
        // Config object below is passed to stripe
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 for 5 credits',
            source: req.body.id
        })
        // Comes from Passport Session and Initialize in index.js
        // User Model below
        req.user.credits += 5;
        // Need to save and persist User Model, Below then becomes a async call
        const user = await req.user.save();

        res.send(user);
        // console.log(charge)
    })
}


// Every stripe method like above returns a chainable promise which can be used
// instead of a regular callback

// console.log(req.body) //Body shown below
// { id: 'tok_xxxxxxxxxxxxxxxxxxxxx', //My stripe token
//   object: 'token',
//   card:
//    { id: 'card_xxxxxxxxxxxxxxxxxxxx', //Not correct
    //  object: 'card',
    //  address_city: null,
    //  address_country: null,
    //  address_line1: null,
    //  address_line1_check: null,
    //  address_line2: null,
    //  address_state: null,
    //  address_zip: null,
    //  address_zip_check: null,
    //  brand: 'Visa',
    //  country: 'US',
    //  cvc_check: 'pass',
    //  dynamic_last4: null,
    //  exp_month: 12,
    //  exp_year: 2023,
    //  funding: 'credit',
    //  last4: '4242',
    //  metadata: {},
    //  name: 'rjriesenberger@gmail.com',
    //  tokenization_method: null },
//   client_ip: '00.000.00.0.00',
//   created: 1571959518,
//   email: 'rjriesenberger@gmail.com',
//   livemode: false,
//   type: 'card',
//   used: false }




// console.log(charge) //Body shown below
// { id: 'xxxxxxxxxxxxxxxx',
//    object: 'charge',
//    amount: 500,
//    amount_refunded: 0,
//    application: null,
//    application_fee: null,
//    application_fee_amount: null,
//    balance_transaction: 'xxxxxxxxxxxxxxxxxxxxx',
//    billing_details:
    // { address:
    //    { city: null,
        //  country: null,
        //  line1: null,
        //  line2: null,
        //  postal_code: null,
        //  state: null },
    //   email: null,
    //   name: 'rjriesenberger@gmail.com',
    //   phone: null },
//    captured: true,
//    created: 1571960727,
//    currency: 'usd',
//    customer: null,
//    description: '$5 for 5 credits',
//    destination: null,
//    dispute: null,
//    failure_code: null,
//    failure_message: null,
//    fraud_details: {},
//    invoice: null,
//    livemode: false,
//    metadata: {},
//    on_behalf_of: null,
//    order: null,
//    outcome:
    // { network_status: 'approved_by_network',
    //   reason: null,
    //   risk_level: 'normal',
    //   risk_score: 41,
    //   seller_message: 'Payment complete.',
    //   type: 'authorized' },
//    paid: true,
//    payment_intent: null,
//    payment_method: 'xxxxxxxxxxxxxxxxxxxxxxx',
//    payment_method_details:
    // { card:
    //    { brand: 'visa',
        //  checks: [Object],
        //  country: 'US',
        //  exp_month: 12,
        //  exp_year: 2023,
        //  fingerprint: 'k07VZ4L66roQBoAn',
        //  funding: 'credit',
        //  installments: null,
        //  last4: '4242',
        //  network: 'visa',
        //  three_d_secure: null,
        //  wallet: null },
    //   type: 'card' },
//    receipt_email: null,
//    receipt_number: null,
//    receipt_url:
    // 'https://pay.stripe.com/receipts/acct_xxxxxxxxxx/xxxxxxxxxxxxxxxx/xxxxxxxxxxxxx',
//    refunded: false,
//    refunds:
    // { object: 'list',
    //   data: [],
    //   has_more: false,
    //   total_count: 0,
    //   url: '/v1/charges/xxxxxxxxxxxxxxxx/refunds' },
//    review: null,
//    shipping: null,
//    source:
    // { id: 'xxxxxxxxxxxxxxxxxxxxxxx',
    //   object: 'card',
    //   address_city: null,
    //   address_country: null,
    //   address_line1: null,
    //   address_line1_check: null,
    //   address_line2: null,
    //   address_state: null,
    //   address_zip: null,
    //   address_zip_check: null,
    //   brand: 'Visa',
    //   country: 'US',
    //   customer: null,
    //   cvc_check: null,
    //   dynamic_last4: null,
    //   exp_month: 12,
    //   exp_year: 2023,
    //   fingerprint: 'k07VZ4L66roQBoAn',
    //   funding: 'credit',
    //   last4: '4242',
    //   metadata: {},
    //   name: 'rjriesenberger@gmail.com',
    //   tokenization_method: null },
//    source_transfer: null,
//    statement_descriptor: null,
//    statement_descriptor_suffix: null,
//    status: 'succeeded',
//    transfer_data: null,
//    transfer_group: null 