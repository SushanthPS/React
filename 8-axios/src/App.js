import "./App.css";
import Todo from "./components/Todo";
import Github from "./components/Github";
import Cowin from "./components/Cowin";

const option = 1;

function App() {
    return option === 1 ? (
        <div className="App">
            <Todo></Todo>
        </div>
    ) : option === 2 ? (
        <div className="App">
            <Github></Github>
        </div>
    ) : option === 3 ? (
        <div className="App">
            <Cowin></Cowin>
        </div>
    ) : null;
}

export default App;
