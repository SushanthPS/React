import { ADD_COUNT, SUB_COUNT, ADD_TODO } from "./actionTypes.js";

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
        default:
            return state;
    }
};
