import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { todosReducer } from "./Todos/reducer";
import { authReducer } from "./Auth/reducer";
import ReduxThunk from "redux-thunk";

const rootReducer = combineReducers({ todos: todosReducer, auth: authReducer });

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(ReduxThunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
