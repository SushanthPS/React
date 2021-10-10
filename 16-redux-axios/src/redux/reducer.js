import {
    ADD_COUNT,
    SUB_COUNT,
    ADD_TODO,
    ADD_TODO_SUCCESS,
    ADD_TODO_ERROR,
    ADD_TODO_LOADING,
} from "./actionTypes.js";

export const reducer = (state, { type, payload }) => {
    switch (type) {
        case ADD_COUNT:
            return {
                ...state,
                counter: state.counter + payload,
            };
        case SUB_COUNT:
            return {
                ...state,
                counter: state.counter - payload,
            };
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, { ...payload }],
            };
        case ADD_TODO_SUCCESS:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    isLoading: false,
                },
            };

        case ADD_TODO_ERROR:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    isLoading: false,
                    isError: true,
                },
            };

        case ADD_TODO_LOADING:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    isLoading: true,
                },
            };
        default:
            return state;
    }
};
