import { createStore } from "redux";
import { addTodo, subCount, addCount } from "./actions.js";
import { reducer } from "./reducer.js";

const initialState = {
    counter: 0,
    todos: [],
};

const store = createStore(reducer, initialState);
store.dispatch(addCount(1));
store.dispatch(addCount(2));
console.log(store.getState());

store.dispatch(subCount(1));
store.dispatch(addTodo({ name: "Learn React", status: false }));
store.dispatch(addTodo({ name: "Learn Vue", status: false }));
console.log(store.getState());
