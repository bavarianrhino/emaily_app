// SurveyField contains logic to render to a single label text input
import React from 'react';

// Props are being passed by redux-form
// export default ({ input, label, meta }) => { //used nested destructuring

export default ({ input, label, meta: { error, touched } }) => {
    // console.log(input);
    // console.log(meta); //see log output below

    // <input {...input} />  REPLACES <input onBlur={input.onBlur} onChange={input.onChange} /> etc.
    // Label is not hard coded so that we can pass along a prop that assigns it automatically
    // if touched is true, and there is a string in error re
    return (
        <div>
            <label>{label}</label>
            <input {...input} style={{marginBottom: '5px'}}/>
            <div className="red-text" style={{marginBottom: '20px'}}>
                {touched && error}
            </div>
        </div>
    );
};

// export default props => {
    // console.log(props);
// 
// {input: {…}, meta: {…}, type: "text"}
// input:
// name: "title"
// onBlur: ƒ (event)
// onChange: ƒ (event)
// onDragStart: ƒ (event)
// onDrop: ƒ (event)
// onFocus: ƒ (event)
// value: ""
// __proto__: Object
// meta:
// active: false
// asyncValidating: false
// autofilled: false
// dirty: false
// dispatch: ƒ ()
// arguments: (...)
// caller: (...)
// length: 0
// name: "dispatch"
// prototype: {constructor: ƒ}
// __proto__: ƒ ()
// [[FunctionLocation]]: VM1145:1
// [[Scopes]]: Scopes[5]
// error: undefined
// form: "surveyForm"
// initial: undefined
// invalid: false
// pristine: true
// submitFailed: false
// submitting: false
// touched: true
// valid: true
// visited: false
// warning: undefined
// __proto__: Object
// type: "text"
// __proto__: Object


// meta logged
// active: false
// asyncValidating: false
// autofilled: false
// dirty: false
// dispatch: ƒ ()
// error: "You must provide a title"
// form: "surveyForm"
// initial: undefined
// invalid: true
// pristine: true
// submitFailed: true
// submitting: false
// touched: true
// valid: false
// visited: false
// warning: undefined
// __proto__: Object
