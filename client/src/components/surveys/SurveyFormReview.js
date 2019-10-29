// SurveyFrormReview shows users their inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';

// import { } from 'semantic-ui-react';

const SurveyFormReview = ({ onSurveyEdit, formValues }) => {

    // See below example for clarification
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
            <button className="yellow darken-3 btn-flat" onClick={onSurveyEdit}>Edit</button>
        </div>
    )
}

// const mapStateToProps = (state) => {return { attr: state.attr}}
function mapStateToProps (state) {
    console.log(state);
    return{ formValues: state.form.surveyForm.values }; // Passes props to this component and is destructed
}

export default connect(mapStateToProps)(SurveyFormReview);

// console.log entire state when form is submitted
// *********in form object, surveyForm is declared in our surveyForm export reactForm function
// {auth: {…}, form: {…}}
// auth:
//     credits: 30
//     googleId: "xxxxxxxxxxxxxxxxxxx"
//     __v: 0
//     _id: "xxxxxxxxxxxxxxxxxxx"
//     __proto__: Object
// form:
//     surveyForm:
//         anyTouched: true
//         fields:
//             body: {visited: true, touched: true}
//             recipients: {visited: true, touched: true}
//             subject: {visited: true, touched: true}
//             title: {visited: true, touched: true}
//         registeredFields:
//             body: {name: "body", type: "Field", count: 1}
//             recipients: {name: "recipients", type: "Field", count: 1}
//             subject: {name: "subject", type: "Field", count: 1}
//             title: {name: "title", type: "Field", count: 1}
//         submitSucceeded: true
//         syncErrors:
//         recipients: undefined
//         values:
//             body: "asdas"
//             recipients: "asdas@gmail.com"
//             subject: "asdasd"
//             title: "sdf"



// const mapDispatchToProps = (dispatch) => ({
//     functionName: (param) => dispatch({ type: 'ACTION_NAME', param })
// })

// const reviewFields = _.map(formFields, field => {
//     return (
//         <div key={field.name}>
//             <label>{field.label}</label>
//             <div>{formValues[field.name]}</div>
//         </div>
//     )
// })