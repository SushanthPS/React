import { useState } from "react";
import Button from "./Button";

export default function Grocery() {
    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value);
    };

    const [mainList] = useState([]);
    const [wishList] = useState([]);

    const addMain = () => {
        mainList.push(text);
        setText("");
    };

    const addWish = () => {
        wishList.push(text);
        setText("");
    };

    return (
        <div>
            <div className="margin10">
                <input
                    type="text"
                    name="grocery"
                    placeholder="Enter Grocery Item"
                    value={text}
                    onChange={handleChange}
                />
                <br />
                <button onClick={addMain}>Add to Main List</button>
                <button onClick={addWish}>Add to Wish List</button>
            </div>
            <div>
                <Button mainList={mainList} wishList={wishList}></Button>
            </div>
        </div>
    );
}
