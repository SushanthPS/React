import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            setLoading(true);
            const res = await axios.get(url);
            setLoading(false);
            setData(res.data.items);
        } catch (err) {
            setError(true);
            setLoading(false);
            console.log(err.message);
        }
    };

    return { loading, error, data };
}

export default function Github() {
    const { loading, error, data } = useFetch(
        "https://api.github.com/search/users?q=sushanth&per_page=10"
    );

    return loading ? (
        "Loading..."
    ) : error ? (
        "Error occured"
    ) : (
        <div>
            {data.map((el) => {
                return <div key={el.id}>{el.login}</div>;
            })}
        </div>
    );
}
