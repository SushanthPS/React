import "./App.css";
import Payment from "./components/Payment";
import RestaurantDetails from "./components/RestaurantDetails";

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

const temp = {
    id: 1,
    restaurantName: "Morissette and Sons",
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ggolade30mtewrqkvfkj",
    cost_for_one: 806,
    cost_for_two: 1829,
    min: 134,
    reviews: 813,
    votes: 803,
    rating: 2.7,
    categories: ["Continental", "Indian", "Multi-Cusine"],
    payment: ["card", "cash"],
};

function App() {
    if (option === 1)
        return (
            <div className="App">
                <RestaurantDetails obj={temp}></RestaurantDetails>
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
