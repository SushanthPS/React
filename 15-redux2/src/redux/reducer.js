import {
    ADD_TODO_LOADING,
    ADD_TODO_ERROR,
    ADD_TODO_SUCCESS,
    GET_TODO_LOADING,
    GET_TODO_ERROR,
    GET_TODO_SUCCESS,
} from "./actionTypes.js";

const initialState = {
    todos: [],
    isLoading: false,
    isError: false,
};

export const TodoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TODO_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case ADD_TODO_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        case ADD_TODO_SUCCESS:
            return {
                ...state,
                isLoading: false,
            };

        case GET_TODO_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case GET_TODO_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        case GET_TODO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: [...payload],
            };
        default:
            return state;
    }
};
