import { useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useEffect } from "react/cjs/react.development";

export default function ProductPage() {
    const param = useParams();
    const [data, setData] = useState({});

    const getData = async () => {
        const res = await axios.get("http://localhost:3001/products", {
            params: {
                id: param.id,
            },
        });
        setData(res.data[0]);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="main">
            <div>
                <h1>
                    Name:<span> {data.name}</span>
                </h1>
            </div>
            <div>
                <h1>
                    Price:<span> {data.price}</span>
                </h1>
            </div>
        </div>
    );
}
