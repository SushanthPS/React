import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { TodoReducer } from "./Todos/reducer.js";
import { AuthReducer } from "./Auth/reducer.js";

const rootReducer = combineReducers({ auth: AuthReducer, app: TodoReducer });

const logger = (state) => (next) => (action) => {
    console.log("Dispatching action ", action, next, state);
    return next(action);
};

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
