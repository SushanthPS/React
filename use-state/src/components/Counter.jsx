import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const handClick = (num) => {
        setCount(count + num);
    };

    return (
        <>
            <h2>Count: {count}</h2>
            <button
                onClick={() => {
                    handClick(1);
                }}
            >
                Add 1
            </button>
            <button
                onClick={() => {
                    handClick(-1);
                }}
            >
                Subtract 1
            </button>
        </>
    );
}

export default Counter;
