import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

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
    } else {
        return (
            <div className="App">
                <Form></Form>
            </div>
        );
    }
}

export default App;
