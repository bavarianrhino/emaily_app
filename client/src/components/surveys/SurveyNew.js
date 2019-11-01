// SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {

    state = {
        showFormReview: false
    }

    onSurveySubmit = () => {
        this.setState({
            showFormReview: !this.state.showFormReview
        })
    }

    onSurveyEdit = () => {
        this.setState({
            showFormReview: !this.state.showFormReview
        })
    }

    render() {
        return (
            <div>
                {this.state.showFormReview ? <SurveyFormReview onSurveyEdit={this.onSurveyEdit}/> : <SurveyForm onSurveySubmit={this.onSurveySubmit}/>}
            </div>
        )
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);

// ************************************
// Notes can be found in consolelog.js 
// ************************************