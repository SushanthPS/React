import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Counter from "./components/Counter";
import { Todos } from "./components/Todos";

const option = 2;

function App() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    if (loading) {
        return (
            <div>
                {" "}
                Loading Page...
                <button
                    onClick={() => {
                        setLoading(false);
                        setError(false);
                    }}
                >
                    {" "}
                    Click me!
                </button>
            </div>
        );
    }
    if (error) {
        return <div>Something went wrong</div>;
    } else if (option === 1) {
        return (
            <div className="App">
                <Form></Form>
            </div>
        );
    } else if (option === 2) {
        return (
            <div className="App">
                <Counter></Counter>
            </div>
        );
    } else if (option === 3) {
        return (
            <div className="App">
                <Todos></Todos>
            </div>
        );
    }
}

export default App;
