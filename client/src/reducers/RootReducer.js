import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';

export const RootReducer = combineReducers({
    auth: authReducer,
    form: reduxForm
});