import {
    ADD_COUNT,
    SUB_COUNT,
    ADD_TODO,
    MUL_COUNT,
    DIV_COUNT,
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
        case MUL_COUNT:
            return {
                ...state,
                counter: state.counter * payload,
            };
        case DIV_COUNT:
            return {
                ...state,
                counter: state.counter / payload,
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
