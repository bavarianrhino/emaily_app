import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions'

class Payments extends Component {
    
    componentDidMount() { document.title = 'Survey[] - Stripe Payment - Ryan Riesenberger' }

    render() {
        return (
            <StripeCheckout
                name="SURVEY[] APPLICATION"
                description="Purchase 5 email credits for $5"
                amount={500}
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}>
                <button className="btn green">Add Credits</button>
            </StripeCheckout>
        );
    }
}

export default connect(null, actions)(Payments);