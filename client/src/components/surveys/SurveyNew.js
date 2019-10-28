// SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component } from 'react';
import SurveyForm from './SurveyForm'

// import { connect } from 'react-redux';
// import { } from 'semantic-ui-react';

class SurveyNew extends Component {
    render() {
        return (
            <div>
                <SurveyForm />
            </div>
        )
    }
}

export default SurveyNew