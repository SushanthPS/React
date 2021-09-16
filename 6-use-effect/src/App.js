import { useState } from "react/cjs/react.development";
import "./App.css";
import Counter from "./components/Counter";
import Todo from "./components/Todo";

const option = false;

function App() {
    const [show, setShow] = useState(true);
    return (
        <div className="App">
            {option ? (
                show ? (
                    <>
                        <Counter fcount={20} ecount={23}></Counter>
                        <button onClick={() => setShow(false)}>
                            Hide Counter
                        </button>
                    </>
                ) : (
                    <button onClick={() => setShow(true)}>Show Counter</button>
                )
            ) : (
                <Todo></Todo>
            )}
        </div>
    );
}

export default App;
