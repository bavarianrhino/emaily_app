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
        <div className="container" style={{ borderRadius: '10px'}}>
            <div className='row valign-wrapper white z-depth-4'>
                <div className="col s12" style={{ textAlign: 'left', marginLeft: '20px'}}>
                    <h5><em>Please confirm your entries are correct.</em></h5>
                    <div style={{ paddingBottom: '15px'}}>
                        {reviewFields}
                    </div>
                </div>
            </div>
            <div className='row valign-wrapper'>
                <div className="col s12" style={{ textAlign: 'center', borderRadius: '10px'}}>
                    <button className="orange white-text btn-large left" onClick={onSurveyEdit}> Edit </button>
                    <button onClick={() => submitSurvey(formValues, history)}className="green btn-large right white-text pulse">Send Survey<i className='material-icons right'>email</i></button>
                </div>
            </div>
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