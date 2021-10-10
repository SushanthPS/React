import { createStore } from "redux";
import { reducer } from "./reducer.js";

const initialState = {
    counter: 0,
    todos: [],
};

export const store = createStore(reducer, initialState);
