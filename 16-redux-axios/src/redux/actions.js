import {
    SUB_COUNT,
    ADD_COUNT,
    ADD_TODO,
    ADD_TODO_SUCCESS,
    ADD_TODO_ERROR,
    ADD_TODO_LOADING,
} from "./actionTypes.js";

export const addCount = (data) => ({ type: ADD_COUNT, payload: data });

export const subCount = (data) => ({ type: SUB_COUNT, payload: data });

export const addTodo = (data) => ({
    type: ADD_TODO,
    payload: { status: false, title: data },
});

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
