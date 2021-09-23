import "./App.css";
import Counter from "./components/Counter";
import Form from "./components/Form";

const option = 1;

function App() {
    if (option === 1)
        return (
            <div className="App">
                <Counter></Counter>
            </div>
        );
    else if (option === 2)
        return (
            <div className="App">
                <Form></Form>
            </div>
        );
}

export default App;
