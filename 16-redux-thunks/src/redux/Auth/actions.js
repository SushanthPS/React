import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./actionTypes";

export const loginLoading = () => ({
    type: LOGIN_LOADING,
});

export const loginSuccess = (data) => ({
    type: LOGIN_SUCCESS,
    payload: data,
});

export const loginError = (err) => ({
    type: LOGIN_ERROR,
    payload: err,
});
