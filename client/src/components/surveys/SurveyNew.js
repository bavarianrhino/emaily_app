// SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component } from 'react';
import SurveyForm from './SurveyForm'
import SurveyFormReview from './SurveyFormReview'

// import { connect } from 'react-redux';
// import { } from 'semantic-ui-react';

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

export default SurveyNew