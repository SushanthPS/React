import { useState } from "react/cjs/react.development";
import List from "./List";
import { v4 as uuid } from "uuid";

export default function Button({ mainList, wishList }) {
    const [buttonState, setButtonState] = useState(0);
    if (buttonState === 0)
        return (
            <>
                <button onClick={() => setButtonState(1)}>
                    Show Wish List
                </button>
                {mainList.map((el) => {
                    return <List key={uuid()} el={el}></List>;
                })}
            </>
        );
    else if (buttonState === 1)
        return (
            <>
                <button onClick={() => setButtonState(0)}>
                    Show Main List
                </button>
                {wishList.map((el) => (
                    <List key={uuid()} el={el}></List>
                ))}
            </>
        );
}
