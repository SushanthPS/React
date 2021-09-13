import { useState } from "react";

export default function Counter(props) {
    const [count, setCount] = useState(props.value);

    const handleClick = (num) => {
        setCount(count + num);
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => handleClick(1)}>Add 1</button>
            <button onClick={() => handleClick(-1)}>Sub 1</button>
            <button onClick={() => handleClick(count)}>Double</button>
        </div>
    );
}
