// SurveyForm shows a form for a user to add input
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'; // Allows this component to communicate with the store....much like the connect
import SurveyField from './SurveyField'

// import { connect } from 'react-redux';
// import { } from 'semantic-ui-react';

class SurveyForm extends Component {

    renderFields() {
        return (
            <div>
                <Field type='text' name="title" component={SurveyField} /> 
            </div>
        )
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                    
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
// Unlike connect, reduxForm only takes one property
export default reduxForm({ form: 'surveyForm' })(SurveyForm);

// ABOVE REPLACES THIS 
// <Field type="text" name="surveyTitle" component="input" />
// <Field type="text" name="surveySubject" component="input" />
// <Field type="text" name="surveyBody" component="input" />
// <Field type="text" name="Recipients" component="input" />