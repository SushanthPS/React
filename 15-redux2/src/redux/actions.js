import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./actionTypes.js";

import { v4 as uuid } from "uuid";

export const addTodo = (data) => ({
    type: ADD_TODO,
    payload: { status: false, title: data, id: uuid() },
});

export const toggleTodo = (data) => ({
    type: TOGGLE_TODO,
    payload: data,
});

export const deleteTodo = (data) => ({
    type: DELETE_TODO,
    payload: data,
});
