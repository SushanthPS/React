import axios from "axios";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

export default function Github() {
    const [text, setText] = useState("");
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [users, setUsers] = useState([]);

    const handleSearch = async () => {
        let res = await axios.get("https://api.github.com/search/users", {
            params: {
                q: text,
                page: page,
                per_page: 10,
            },
        });

        setUsers(res.data.items);
        setTotal(res.data.total_count);
        console.log(users);
    };

    useEffect(() => {
        handleSearch();
    }, [page]);

    return (
        <div>
            <p className="page">Page Number: {page}</p>
            <h1>Github Search</h1>
            <input
                type="text"
                value={text}
                placeholder="Search User"
                onChange={(e) => {
                    setText(e.target.value);
                }}
            />
            <button onClick={handleSearch}>Search</button>
            <div className="users">
                {users.map((el) => {
                    return (
                        <a href={el.html_url} target="_blank" rel="noreferrer">
                            {" "}
                            <div className="user" key={el.id}>
                                {el.login}
                            </div>
                        </a>
                    );
                })}
            </div>
            <div>
                <button disabled={page === 1} onClick={() => setPage(page - 1)}>
                    Prev Page
                </button>
                <button
                    disabled={page === Math.ceil(total / 10) || total === 0}
                    onClick={() => setPage(page + 1)}
                >
                    Next Page
                </button>
            </div>
        </div>
    );
}
