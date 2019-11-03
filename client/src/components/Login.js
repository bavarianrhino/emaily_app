import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import { Link, withRouter, Redirect } from 'react-router-dom';

const OauthOption = ({ label, icon, background, url }) => (
    <div className="row">
        <div className="col s12">
            <a href={url} className={"btn-large z-depth-1 waves-effect waves-light center " + background} style={{ display: 'flow-root'}}>
                <i className='medium material-icons' style={{ verticalAlign: 'sub', paddingRight: '13px'}}>{(icon === 'people') ? `people` : `contact_mail`}</i>
                {label}
            </a>
        </div>
    </div>
);

class Login extends Component {

        componentDidMount() { document.title = 'Survey[] - Login - Built by Ryan Riesenberger' }
        
        
        render() {
            console.log(document)
        const { auth } = this.props;

        if (auth)
            return <Redirect to="/surveys" />;
    
        return (
            <div className="cover">
                <div style={{position: "relative", top: 120}} className="row">
                    <div style={{padding: 10}} className="col s12 m6 offset-m3 z-depth-3 grey darken-1">
                        <h5 className="center-align white-text">Sign in with</h5>

                        <OauthOption url='/auth/google' label="Login with Google" icon="contact_mail" background="red"/>
                        <OauthOption url='/auth/facebook' label="Login with Facebook" icon="people" background="blue"/>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps({ auth }) {
    return { auth }
   }
   
export default connect(mapStateToProps)(Login);
