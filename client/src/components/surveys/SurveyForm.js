// SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'; 
import validateEmails from '../../utils/validateEmails';
import FIELDS from './formFields';
import SurveyField from './SurveyField';

class SurveyForm extends Component {

    componentDidMount() { document.title = 'Survey[] - New Survey - Ryan Riesenberger' }

    renderFields = () => {
        return FIELDS.map((prop) => {
            return <Field key={prop.name} label={prop.label} type='text' name={prop.name} component={SurveyField} /> 
        })
    }
    
    render() {
        return (
            <div className="container white z-depth-4" style={{ padding: '10px 10px 0px 10px', borderRadius: '10px' }}>
                <form  style={{  }} onSubmit={this.props.handleSubmit(() => this.props.onSurveySubmit())}>
                    {this.renderFields()}
                    <button type="submit" className="green btn-large right white-text">Next<i className="material-icons right">arrow_forward</i></button>
                    <Link to="/surveys" className="red btn-large left white-text">Cancel</Link>
                </form>
            </div>
        )
    }
}

function validate(values) {
    const errors = {};
    errors.recipients = validateEmails(values.recipients || '')

    _.each(FIELDS, ({ name, errorValue }) => {        
        if(!values[name]) {
            errors[name] = errorValue
        }
    })

    return errors
}

export default reduxForm({ 
    validate: validate,
    form: 'surveyForm',
    destroyOnUnmount: false 
})(SurveyForm);

// ************************************
// Notes can be found in consolelog.js 
// ************************************