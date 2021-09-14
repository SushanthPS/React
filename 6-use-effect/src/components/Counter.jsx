import { useEffect, useState } from "react";

export default function Counter({ ecount, fcount }) {
    const [count, setCount] = useState(fcount);

    useEffect(() => {
        const id = setInterval(() => {
            setCount((prev) => {
                if (prev === ecount - 1) clearInterval(id);
                return prev + 1;
            });
        }, 1000);
        return () => {
            console.log("Unmounting");
            clearInterval(id);
        };
    }, []);

    return (
        <div>
            <h1>Counter is: {count}</h1>
        </div>
    );
}
