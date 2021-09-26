import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function UserDetails() {
    const { id } = useParams();
    const [data, setData] = useState({});

    const getUser = async () => {
        const res = await axios.get(`https://reqres.in/api/users/${id}`);
        setData(res.data.data);
    };

    useEffect(() => {
        getUser();
    }, [id]);

    return (
        <div>
            <img src={data.avatar} alt="" />
            <h3>
                {data.first_name} {data.last_name}
            </h3>
            <div>Email: {data.email}</div>
        </div>
    );
}
