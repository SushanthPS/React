import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Products() {
    const [data, setData] = useState([]);

    const getData = async () => {
        const res = await axios.get(" http://localhost:3001/products");
        setData(res.data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <table style={{ margin: "50px auto auto auto" }}>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>More Details</th>
                </tr>
                {data.map((e) => (
                    <tr key={e.id}>
                        <td>{e.name}</td>
                        <td>{e.price}</td>
                        <td>
                            <Link to={`/products/${e.id}`}>Show more</Link>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    );
}
