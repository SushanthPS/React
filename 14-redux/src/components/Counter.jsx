import { useDispatch, useSelector } from "react-redux";
import { addCount, divCount, mulCount, subCount } from "../redux/actions";
import styled from "styled-components";
import { useState } from "react";

const Cont = styled.div`
    display: inline-flex;
    flex-direction: column;
    margin-bottom: 50px;
    border: 2px solid gray;
    padding: 20px;
    margin-top: 50px;
    align-items: center;
    justify-content: center;
`;

export default function Counter() {
    const counter = useSelector((store) => store.counter);
    const dispatch = useDispatch();
    const [x, setX] = useState(0);

    return (
        <Cont>
            <input
                type="number"
                placeholder="value of X"
                onChange={(e) => {
                    setX(Number(e.target.value));
                }}
            />
            <h1>Counter: {counter}</h1>
            <button
                onClick={() => {
                    dispatch(addCount(x));
                }}
            >
                Increase count
            </button>
            <button
                onClick={() => {
                    dispatch(subCount(x));
                }}
            >
                Decrease count
            </button>
            <button
                onClick={() => {
                    dispatch(mulCount(x));
                }}
            >
                Multiply count
            </button>
            <button
                onClick={() => {
                    if (x === 0) alert("Invalid division");
                    else dispatch(divCount(x));
                }}
            >
                Divide count
            </button>
        </Cont>
    );
}
