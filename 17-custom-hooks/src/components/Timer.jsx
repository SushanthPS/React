import { useEffect, useState } from "react";

function useTimer(ms) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const id = setTimeout(() => {
            setShow(true);
        }, ms);

        return () => {
            console.log("Unmounting");
            clearTimeout(id);
        };
    }, [ms]);

    return show;
}

export default function Timer() {
    const timer = useTimer(3000);

    return timer ? <h1>Welcome</h1> : <h1>Loading...</h1>;
}
