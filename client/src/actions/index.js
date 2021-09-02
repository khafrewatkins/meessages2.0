// to house the action creators
// redux thunk allows action creators to be created 
// with always immediately returning an action

// import axios to make ajax request
import axios from 'axios';
import { FETCH_USER } from './types';

// action creator to get the user - login verified
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')
    dispatch({ type: FETCH_USER, payload: res.data })
    };

    // using information captured by the auth reducer to 
    // update the amount of credits for the user

    // action creator using the token from the stripe api
    // using the built-in dispatch action creator
export const handleToken = token => async dispatch => {
    const res = await axios.post('/api/stripe', token);
    // using the same user model as the fetchUser action creator 
    // delivering the payload with res from this action creator and
    // the user's data
    dispatch({ type: FETCH_USER, payload: res.data });
};
