import {
    SUB_COUNT,
    ADD_COUNT,
    ADD_TODO_SUCCESS,
    ADD_TODO_ERROR,
    ADD_TODO_LOADING,
    GET_TODO_LOADING,
    GET_TODO_ERROR,
    GET_TODO_SUCCESS,
} from "./actionTypes.js";

//COUNTER
export const addCount = (data) => ({ type: ADD_COUNT, payload: data });

export const subCount = (data) => ({ type: SUB_COUNT, payload: data });

//TODOS
export const addTodoSuccess = (data) => {
    return {
        type: ADD_TODO_SUCCESS,
        payload: data,
    };
};

export const addTodoError = (error) => {
    return {
        type: ADD_TODO_ERROR,
        payload: error,
    };
};

export const addTodoLoading = () => {
    return {
        type: ADD_TODO_LOADING,
    };
};

export const getTodoLoading = () => {
    return {
        type: GET_TODO_LOADING,
    };
};

export const getTodoError = () => {
    return {
        type: GET_TODO_ERROR,
    };
};

export const getTodoSuccess = (data) => {
    return {
        type: GET_TODO_SUCCESS,
        payload: data,
    };
};
