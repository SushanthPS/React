import "./App.css";
import Counter from "./components/Counter";
import Todos from "./components/Todos";

const option = 2;

function App() {
    return (
        <div className="App">
            {option === 1 ? <Counter /> : option === 2 ? <Todos /> : ""}
        </div>
    );
}

export default App;
