import { useEffect, useRef, useState } from "react";

export default function Counter() {
    const timerRef = useRef();
    const [counter, setCounter] = useState(0);
    const [started, setStarted] = useState(false);

    useEffect(() => {}, []);

    const startTimer = () => {
        if (!started) {
            setStarted(true);
            timerRef.current = setInterval(() => {
                setCounter((p) => p + 1);
            }, 500);
        }
    };

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button
                onClick={() => {
                    clearInterval(timerRef.current);
                    setStarted(false);
                }}
            >
                Pause
            </button>
            <button onClick={startTimer}>Start</button>
        </div>
    );
}
