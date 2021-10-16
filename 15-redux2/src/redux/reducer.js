import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./actionTypes.js";

const initialState = {
    todos: [],
    isLoading: false,
    isError: false,
};

export const TodoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
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
