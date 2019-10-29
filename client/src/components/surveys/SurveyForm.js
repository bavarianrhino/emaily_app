// SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'; // Allows this component to communicate with the store....much like the connect
import SurveyField from './SurveyField'
import { Link } from 'react-router-dom'
import validateEmails from '../../utils/validateEmails'
import FIELDS from './formFields'

// import { connect } from 'react-redux';
// import { } from 'semantic-ui-react';

// const FIELDS = [
//     { label: 'Survey Title', name: 'title', errorValue: 'Please include your survey title' },
//     { label: 'Subject', name: 'subject', errorValue: 'Please include your survey subject'},
//     { label: 'Email Body', name: 'body', errorValue: 'Oops! You\'re missing something...' },
//     { label: 'Recipient List', name: 'recipients', errorValue: 'Please enter at least one email!' }
// ]

class SurveyForm extends Component {

    renderFields = () => {
        return FIELDS.map((prop) => {
            // prop =  {label, name}
            return <Field key={prop.name} label={prop.label} type='text' name={prop.name} component={SurveyField} /> 
        })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(() => this.props.onSurveySubmit())}>
                    {this.renderFields()}
                    <button type="submit" className="green btn-flat right white-text">Next<i className="material-icons right">arrow_forward</i></button>
                    <Link to="/surveys" className="red btn-flat left white-text">Cancel</Link>
                </form>
            </div>
        )
    }
}

function validate(values) {
    // if the errors objects returns empty there are no validation errors
    const errors = {};

    // This validates each email...but will throw error below if no emails are provided
    // I use || "" because as the application boots up and runs for the first time, validatesEmails runs and try's to validate undefined
    errors.recipients = validateEmails(values.recipients || '')

    // values.name references the actual key properties string "name"
    // For recipients...this checks to see if there are any emails present then validates each email
    _.each(FIELDS, ({ name, errorValue }) => {
        // console.log(values)
        if(!values[name]) {
            errors[name] = errorValue
        }
    })

    return errors
}

// Unlike connect, reduxForm only takes one property
// validate is a built in function fom redux-form
// DetroyOnUnmount built in function that keeps all form data if user needs to go back and edit
// destroyOnUnmount: false will not destroy data in form: 'surveyForm

export default reduxForm({ 
    validate: validate,
    form: 'surveyForm',
    destroyOnUnmount: false 
})(SurveyForm);

// DEBUGGING TIPS
// <form onSubmit={this.props.handleSubmit(values => console.log(values))}>


// ABOVE REPLACES THIS 
// <Field type="text" name="surveyTitle" component="input" />
// <Field type="text" name="surveySubject" component="input" />
// <Field type="text" name="surveyBody" component="input" />
// <Field type="text" name="Recipients" component="input" />

// AND THEN REPLACES THIS
// renderFields() {
    //     // label="..." is automatically passed to component and can be called by props.label
    //     return (
    //         <div>
    //             <Field label="Survey Title" type='text' name="title" component={SurveyField} /> 
    //             <Field label="Subject" type='text' name="subject" component={SurveyField} /> 
    //             <Field label="Email Body (survey question)" type='text' name="body" component={SurveyField} /> 
    //             <Field label="Recipient List" type='text' name="emails" component={SurveyField} /> 
    //         </div>
    //     )
    // }

// THEN REDUCED TO THIS HOWEVER I CHOSE THE CODE ABOVE
// renderFields() {
//         return _.map(FIELDS, ({ label, name }) => {
//             return <Field label={label} type='text' name={name} component={SurveyField} /> 
//         })
//     }