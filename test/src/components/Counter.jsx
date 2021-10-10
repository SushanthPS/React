import { useDispatch, useSelector } from "react-redux";
import { addCount, subCount } from "../redux/actions";
import styled from "styled-components";

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

    return (
        <Cont>
            <h1>Counter: {counter}</h1>
            <button
                onClick={() => {
                    dispatch(addCount(1));
                }}
            >
                Increase count
            </button>
            <button
                onClick={() => {
                    dispatch(subCount(1));
                }}
            >
                Decrease count
            </button>
        </Cont>
    );
}
