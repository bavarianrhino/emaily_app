// SurveyFrormReview shows users their inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';
import formFields from './formFields';

const SurveyFormReview = ({ onSurveyEdit, formValues, submitSurvey, history }) => {


    const reviewFields = _.map(formFields, ({name, label}) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>{formValues[name]}</div>
            </div>
        )
    })
    
    return (
        <div>
            <h5>Please confirm your entries are correct</h5>
            <div>
                {reviewFields}
            </div>
            <button className="orange white-text btn-flat" onClick={onSurveyEdit}> Edit </button>
            <button onClick={() => submitSurvey(formValues, history)}className="green btn-flat right white-text" >Send Survey<i className='material-icons right'>email</i></button>
        </div>
    )
}

function mapStateToProps (state) {
    return{ formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));

// ************************************
// Notes can be found in consolelog.js 
// ************************************