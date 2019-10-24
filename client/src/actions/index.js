// ***************************************************************
// After writing each one, write additional /api/* proxy in package.json
// ***************************************************************

import axios from 'axios';
import { FETCH_USER } from './types';

// REFACTORED TO BELOW
// export const fetchUser = () => {
//     return function(dispatch) {
//         axios
//             .get('/api/current_user')
//             .then(res => dispatch({ type: FETCH_USER, payload: res }))
//     };
// };

// REFACTORED NUMBER 1
// export const fetchUser = () => 
//     function(dispatch) {
//         axios
//             .get('/api/current_user')
//             .then(res => dispatch({ type: FETCH_USER, payload: res }))
//     };

// REFACTORED NUMBER 2
// export const fetchUser = () => 
//     (dispatch) => {
//         axios
//             .get('/api/current_user')
//             .then(res => dispatch({ type: FETCH_USER, payload: res }))
//     };

// REFACTORED NUMBER 3
// export const fetchUser = () => dispatch => {
//     axios
//         .get('/api/current_user')
//         .then(res => dispatch({ type: FETCH_USER, payload: res }))
// };

// REFACTORED NUMBER 3
export const fetchUser = () => async (dispatch) => {
    const res = await axios.get('/api/current_user');

    // dispatch({ type: FETCH_USER, payload: res }); Passes entire object
    dispatch({ type: FETCH_USER, payload: res.data });
};

// **Note if setupProxy.js is not in use, execute the following line.
// After writing each one, write additional proxy in package.json
