import "./App.css";
import Dashboard from "./components/Dashboard";

const option = 1;

function App() {
    if (option === 1) {
        return (
            <div className="App">
                <Dashboard></Dashboard>
            </div>
        );
    }
}

export default App;
