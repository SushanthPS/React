import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./actionTypes.js";
import { loadData, saveData } from "../../utils/localStorage";

const initialState = {
    todos: loadData("todos") || [],
};

export const TodoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TODO:
            const updatedData = [...state.todos, { ...payload }];
            saveData("todos", updatedData);
            return {
                ...state,
                todos: updatedData,
            };
        case TOGGLE_TODO:
            const updatedData2 = state.todos.map((el) =>
                el.id === payload ? { ...el, status: !el.status } : el
            );
            saveData("todos", updatedData2);
            return {
                ...state,
                todos: updatedData2,
            };
        case DELETE_TODO:
            const updatedData3 = state.todos.filter((el) => el.id !== payload);
            saveData("todos", updatedData3);
            return {
                ...state,
                todos: updatedData3,
            };
        default:
            return state;
    }
};
