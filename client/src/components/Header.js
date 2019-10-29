import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments'

// import { } from 'semantic-ui-react';


class Header extends Component {

    renderContent() {
        switch (this.props.auth) {
            case null:
                // console.log("REQUEST DOES NOT HAVE RESPONSE")
                return;
            case false:
                console.log("LOGGED OUT")
                return <li><a href="/auth/google">Login With Google</a></li>
            default:
                console.log("LOGGED IN")
                // About to link payments
                // return <li><a href="/api/logout">Logout</a></li>
                return [
                    <li key={1}><Payments /></li>,
                    <li key={3} style={{ margin: '0 10px'}}>Credits: {this.props.auth.credits}</li>,
                    <li key={2}><a href="/api/logout">Logout</a></li>
                ]
        }
    }

    render() {
        // console.log(this.props) //Shows first api return as null and then shows second async api with user data,
        // which returns user data or the boolean false.
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to={this.props.auth ? '/surveys' : '/'} className='brand-logo'>E-Maily!</Link>
                    <ul className="right hide-on-med-and-down">{this.renderContent()}</ul>
                </div>
            </nav>
        )
    }
}

// HOW I USUALLY SET mapStateToProps
// const mapStateToProps = (state) => {
//     return {
//         attr: state.attr
//     }
// }

// REFACTORED BELOW USING ES6
// function mapStateToProps(state) {
//     return { auth: state.auth };
// }

function mapStateToProps({ auth }) {
    return { auth }
}

export default connect(mapStateToProps)(Header);
