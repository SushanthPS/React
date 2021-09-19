import "./App.css";
import Payment from "./components/Payment";
import Restaurant from "./components/Restaurant";

const option = 1;
const el1 = {
    date: "28/10/2020",
    h1: "Amazon Gift",
    h2: "Pay",
    text: "Desktop - Mobile",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg",
    color: "#FFA500",
};
const el2 = {
    date: "17 Sep 2020",
    h1: "Apple Gift",
    h2: "Payment",
    text: "MacOS - Mobile",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    color: "#F5F5F5",
};

function App() {
    if (option === 1)
        return (
            <div>
                <Restaurant></Restaurant>
            </div>
        );
    else if (option === 2)
        return (
            <div className="App">
                <Payment {...el1}></Payment>
                <Payment {...el2}></Payment>
            </div>
        );
}

export default App;
