import { createStore } from "redux";
import { TodoReducer } from "./reducer.js";

export const store = createStore(TodoReducer);
