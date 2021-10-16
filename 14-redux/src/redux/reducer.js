import {
    ADD_COUNT,
    SUB_COUNT,
    ADD_TODO,
    MUL_COUNT,
    DIV_COUNT,
    TOGGLE_TODO,
    DELETE_TODO,
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
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((el) =>
                    el.id === payload ? { ...el, status: !el.status } : el
                ),
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((el) => el.id !== payload),
            };
        default:
            return state;
    }
};
