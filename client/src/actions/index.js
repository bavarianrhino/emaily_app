// ***************************************************************
// After writing each one, write additional /api/* proxy in package.json
// ***************************************************************

import axios from 'axios';
import { FETCH_USER } from './types';

// REFACTOR LATER

export const fetchUser = () => {
    return function(dispatch) {
        axios
            .get('/api/current_user')
            .then(res => dispatch({ type: FETCH_USER, payload: res }))
    };
};
// After writing each one, write additional proxy in package.json
