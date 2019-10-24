import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
    render() {
        return (
            <StripeCheckout
                amount={500}  //This amount take cents, so 5 dollars. 
                token={token => console.log(token)} //Callback function we get back and receive from stripe. Usually named onToken={}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            />
        );
    }
}

export default Payments;