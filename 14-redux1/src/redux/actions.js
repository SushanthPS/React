import { SUB_COUNT, ADD_COUNT, ADD_TODO } from "./actionTypes.js";

export const addCount = (data) => ({ type: ADD_COUNT, payload: data });

export const subCount = (data) => ({ type: SUB_COUNT, payload: data });

export const addTodo = (data) => ({
    type: ADD_TODO,
    payload: { status: false, title: data },
});
