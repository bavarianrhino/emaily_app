import React from "react";
import { connect } from "react-redux"

const Thankyou = (props) => {
    
    return (
        <div id="index-banner" class="parallax-container">
            <div class="section no-pad-bot">
                <div class="container white" style={{ borderRadius: '5px'}}>
                    <br></br>
                    <h1 class="header center black-text text-lighten-2">Thank You!</h1>
                    <div class="row center">
                        <h5 class="header col s12 light">Your feedback is very important to me!!</h5>
                        <h5 class="header col s12 light">Please allow <span style={{ color: "red" }}>30 seconds</span> for the clicked yes/no webhook to post.</h5>
                    </div>
                    <div class="row center">
                        <button className="btn-large waves-effect waves-light teal" style={{ borderRadius: '10px', marginTop: '5px'}}>
                            {props.auth ? <a href="/surveys">See Surveys</a> : <a href="/login">Login</a>}
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
