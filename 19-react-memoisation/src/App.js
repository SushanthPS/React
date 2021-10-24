import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setCount((prev) => prev + 1);
        }, 1000);
    }, []);

    return (
        <div className="App">
            <h1>Count: {count}</h1>
        </div>
    );
}

export default App;
