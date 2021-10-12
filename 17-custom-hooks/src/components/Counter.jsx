import { useReducer } from "react";

const reducer = (state, { type, payload }) => {
    switch (type) {
        case "increment":
            return {
                ...state,
                counter: state.counter + payload,
            };
        case "decrement":
            return {
                ...state,
                counter: state.counter - payload,
            };
        default:
            return state;
    }
};

const initState = {
    counter: 0,
};

export default function Counter() {
    const [state, dispatch] = useReducer(reducer, initState);
    return (
        <div>
            <h3>Counter: {state.counter} </h3>
            <button onClick={() => dispatch({ type: "increment", payload: 2 })}>
                Add
            </button>
            <button onClick={() => dispatch({ type: "decrement", payload: 2 })}>
                Sub
            </button>
        </div>
    );
}
