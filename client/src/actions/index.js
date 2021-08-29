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


