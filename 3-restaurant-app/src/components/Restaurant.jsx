import { useState } from "react";
import resDetails from "../restaurantDetails.json";
import RestaurantDetails from "./RestaurantDetails";
import Navbar from "./Navbar";
import Options from "./Options";

export default function Restaurant() {
    const [data, setData] = useState(resDetails);
    const [rating, setRating] = useState(1);
    const [pay, setPay] = useState("default");
    const [sort, setSort] = useState("default");

    return (
        <div>
            <div>
                <Navbar data={data} setData={setData}></Navbar>
            </div>
            <div className="options">
                <Options
                    setRating={setRating}
                    setPay={setPay}
                    setSort={setSort}
                ></Options>
            </div>
            <div className="grid">
                {data
                    .sort((a, b) =>
                        sort === "lowToHigh"
                            ? a.rating - b.rating
                            : sort === "highToLow"
                            ? b.rating - a.rating
                            : a.id - b.id
                    )
                    .filter((el) => {
                        return el.rating > rating;
                    })
                    .filter((el) => {
                        if (pay === "default") return el;
                        else return el.payment.includes(pay);
                    })
                    .map((el) => (
                        <div key={el.id}>
                            <RestaurantDetails obj={el}></RestaurantDetails>
                        </div>
                    ))}
            </div>
        </div>
    );
}
