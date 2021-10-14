import {
    SUB_COUNT,
    ADD_COUNT,
    ADD_TODO,
    MUL_COUNT,
    DIV_COUNT,
    TOGGLE_TODO,
    DELETE_TODO,
} from "./actionTypes.js";

import { v4 as uuid } from "uuid";

export const addCount = (data) => ({ type: ADD_COUNT, payload: data });

export const subCount = (data) => ({ type: SUB_COUNT, payload: data });

export const mulCount = (data) => ({ type: MUL_COUNT, payload: data });

export const divCount = (data) => ({ type: DIV_COUNT, payload: data });

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
