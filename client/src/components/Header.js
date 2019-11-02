import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments'

import logo from '../media/imgs/surveyarray1.png'

class Header extends Component {

    renderContent() {
        switch (this.props.auth) {
            case null:            
                return;

            case false:
                console.log("LOGGED OUT")
                return <li><a href="/auth/google">Login With Google</a></li>

            default:
                console.log("LOGGED IN")
            
                return [
                    <li key={1}><Payments /></li>,
                    <li key={3} style={{ margin: '0 10px'}}>Credits: {this.props.auth.credits}</li>,
                    <li key={2}><a href="/api/logout">Logout</a></li>
                ]
        }
    }

    render() {
    
        return (
            <div className="container">
                <nav>
                    <div  className='nav-wrapper grey darken-4'>
                        <Link to={this.props.auth ? '/surveys' : '/'}>
                            <a href="#!" class="brand-logo">
                                <img src={logo} alt={logo} style={{ width: '75%', margin: '5px 15px', 'border-radius': '5px' }}className="responsive-img" />
                            </a>
                        </Link>
                        <ul className="right hide-on-med-and-down">{this.renderContent()}</ul>
                    </div>
                </nav>
            </div>
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth }
}

export default connect(mapStateToProps)(Header);
