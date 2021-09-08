import "./App.css";
import Counter from "./components/Counter";

const option = 2;

function App() {
    if (option === 1) {
        return (
            <div className="App">
                <Counter value={0}></Counter>
            </div>
        );
    } else if (option === 2) {
        return null;
    }
}

export default App;
