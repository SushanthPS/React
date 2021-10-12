import {
    SUB_COUNT,
    ADD_COUNT,
    ADD_TODO,
    MUL_COUNT,
    DIV_COUNT,
} from "./actionTypes.js";

export const addCount = (data) => ({ type: ADD_COUNT, payload: data });

export const subCount = (data) => ({ type: SUB_COUNT, payload: data });

export const mulCount = (data) => ({ type: MUL_COUNT, payload: data });

export const divCount = (data) => ({ type: DIV_COUNT, payload: data });

export const addTodo = (data) => ({
    type: ADD_TODO,
    payload: { status: false, title: data },
});
