import "./App.css";
import Todos from "./components/Todos";
import Form from "./components/Form";

const option = 1;

function App() {
    if (option === 1) {
        return (
            <div className="App">
                {/* <Todos></Todos> */}
                <Form></Form>
            </div>
        );
    }
}

export default App;
