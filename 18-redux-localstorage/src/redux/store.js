import { createStore } from "redux";
import { TodoReducer } from "./Todos/reducer.js";

export const store = createStore(TodoReducer);
