import "./App.css";
import Navbar from "./components/Navbar";
import Navbar1 from "./components/Navbar1";
import Navbar2 from "./components/Navbar2";
import CreditCard from "./components/CreditCard";

const option = 4;

function App() {
    if (option === 1)
        return (
            <div className="App">
                <Navbar></Navbar>
            </div>
        );
    else if (option === 2) {
        return (
            <div className="App">
                <Navbar1></Navbar1>
            </div>
        );
    } else if (option === 3) {
        return (
            <div className="App">
                <Navbar2></Navbar2>
            </div>
        );
    } else if (option === 4) {
        return (
            <div className="App">
                <CreditCard></CreditCard>
            </div>
        );
    }
}

export default App;
