
import axios from 'axios';
import { FETCH_SURVEYS, FETCH_USER, DELETE_SURVEY } from './types';

// PREVIOUS REFACTORS IN NOTES
export const fetchUser = () => async (dispatch) => {
    const res = await axios.get('/api/current_user');

    dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async (dispatch) => {
    const res = await axios.post('/api/stripe', token);
    
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
    const res = await axios.post('/api/surveys', values);

    history.push('/surveys');
    console.log(history)
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async (dispatch) => {
    const res = await axios.get('/api/surveys');
    
    dispatch({ type: FETCH_SURVEYS, payload: res.data });
};

export const deleteSurvey = (surveyId) => async (dispatch) => {
    const res = await axios.delete(`/api/surveys/delete/${surveyId}`);

    dispatch({ type: DELETE_SURVEY, payload: surveyId});
};

// ************************************
// Notes can be found in consolelog.js 
// ************************************