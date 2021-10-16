import {
    ADD_TODO_LOADING,
    ADD_TODO_SUCCESS,
    ADD_TODO_ERROR,
    GET_TODO_LOADING,
    GET_TODO_SUCCESS,
    GET_TODO_ERROR,
    CHANGE_TOTAL,
    CHANGE_INCOMPLETE,
} from "./actionTypes.js";

export const addTodoLoading = () => ({
    type: ADD_TODO_LOADING,
});

export const addTodoSuccess = () => ({
    type: ADD_TODO_SUCCESS,
});

export const addTodoError = () => ({
    type: ADD_TODO_ERROR,
});

export const getTodoLoading = () => ({
    type: GET_TODO_LOADING,
});

export const getTodoSuccess = (data) => ({
    type: GET_TODO_SUCCESS,
    payload: data,
});

export const getTodoError = () => ({
    type: GET_TODO_ERROR,
});

export const changeTotal = (data) => ({
    type: CHANGE_TOTAL,
    payload: data,
});

export const changeIncomplete = (data) => ({
    type: CHANGE_INCOMPLETE,
    payload: data,
});
