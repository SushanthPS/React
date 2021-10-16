import {
    ADD_TODO_LOADING,
    ADD_TODO_ERROR,
    ADD_TODO_SUCCESS,
    GET_TODO_LOADING,
    GET_TODO_ERROR,
    GET_TODO_SUCCESS,
    CHANGE_TOTAL,
    CHANGE_INCOMPLETE,
} from "./actionTypes.js";

const initialState = {
    todos: [],
    isLoading: false,
    isError: false,
    total: 0,
    incomplete: 0,
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
        case CHANGE_TOTAL:
            const t = state.todos.length;
            return {
                ...state,
                total: t,
            };
        case CHANGE_INCOMPLETE:
            const t2 = state.todos.filter((el) => !el.status).length;
            return {
                ...state,
                incomplete: t2,
            };
        default:
            return state;
    }
};
