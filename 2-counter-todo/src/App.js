import "./App.css";
import Counter from "./components/Counter";
import Todo from "./components/Todo";

const option = 2;

function App() {
    if (option === 1) {
        return (
            <div className="App">
                <Counter value={0}></Counter>
            </div>
        );
    } else if (option === 2) {
        return (
            <div className="App">
                <h2>Todo List:</h2>
                <Todo></Todo>
            </div>
        );
    }
}

export default App;
