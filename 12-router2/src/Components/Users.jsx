import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Users() {
    const [data, setData] = useState([]);

    const getData = async () => {
        const res = await axios.get("https://reqres.in/api/users");
        setData(res.data.data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            {data.map((el) => (
                <div key={el.id}>
                    <Link to={`/users/${el.id}`}>
                        {el.first_name} {el.last_name}
                    </Link>
                </div>
            ))}
        </div>
    );
}
