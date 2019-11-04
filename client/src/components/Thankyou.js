import React from "react";
import { connect } from "react-redux"

const Thankyou = () => {
    
    return (
        <div id="index-banner" className="parallax-container">
            <div className="section no-pad-bot">
                <div className="container white">
                    <br></br>
                    <h1 className="header center black-text text-lighten-2">Thank You!</h1>
                    <div className="row center">
                        <h5 className="header col s12 light">Your feedback is very important to me!!</h5>
                    </div>
                    <div className="row center">
                        <button className="btn-large waves-effect waves-light teal" style={{ borderRadius: '10px', marginTop: '5px'}}>
                            <a href="/">Login</a>
                        </button>
                    </div>
                    <br></br>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps({ auth }) {
    return { auth }
}

export default connect(mapStateToProps)(Thankyou);
/* <a href="/surveys" id="download-button" class="btn-large waves-effect waves-light green lighten-1">See Surveys</a> */
