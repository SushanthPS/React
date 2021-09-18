import { useState } from "react";
import resDetails from "../restaurantDetails.json";
import RestaurantDetails from "./RestaurantDetails";
import Navbar from "./Navbar";

export default function Restaurant() {
    const [data, setData] = useState(resDetails);

    return (
        <div>
            <div className="grid">
                {data.map((el) => (
                    <div key={el.id}>
                        <RestaurantDetails obj={el}></RestaurantDetails>
                    </div>
                ))}
            </div>
        </div>
    );
}
