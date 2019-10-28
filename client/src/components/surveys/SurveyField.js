// SurveyField contains logic to render to a single label text input
import React from 'react';

// Props are being passed by redux-form
export default ({ input }) => {
    // console.log(input);

    // <input {...input} />  REPLACES <input onBlur={input.onBlur} onChange={input.onChange} /> etc.
    return (
        <div>
            <input {...input} />
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