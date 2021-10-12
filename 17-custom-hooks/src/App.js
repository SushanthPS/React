import { useState } from "react";
import "./App.css";
import Timer from "./components/Timer";
import Github from "./components/Github";
import Counter from "./components/Counter";

const option = 1;

function App() {
    const [hide, setHide] = useState(true);
    return option === 1 ? (
        <div className="App">
            {hide ? <Timer /> : ""}
            <br />
            <button onClick={() => setHide(!hide)}>Click</button>
            <br />
        </div>
    ) : option === 2 ? (
        <div className="App">
            <Counter />
        </div>
    ) : option === 3 ? (
        <div className="App">
            <Github />
        </div>
    ) : (
        ""
    );
}

export default App;
