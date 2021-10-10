import axios from "axios";
import { useEffect, useState } from "react";
import Book from "./Book";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Options from "./Options";

const Books = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: space-evenly;
    gap: 50px;
    margin-top: 50px;
    margin-bottom: 50px;

    a {
        text-decoration: none;
        color: black;
    }
`;

export default function Home() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [sort, setSort] = useState("title");
    const [filter, setFilter] = useState(null);
    const [order, setOrder] = useState("asc");

    const getBooks = async (page) => {
        const res = await axios.get("http://localhost:3001/books", {
            params: {
                _page: page,
                _limit: 10,
                _sort: sort,
                _order: order,
            },
        });
        setData(res.data);
        setTotal(res.headers["x-total-count"]);
    };

    useEffect(() => {
        getBooks(page);
    }, [page, sort, order]);

    return (
        <div>
            <div style={{ marginTop: "20px" }}>
                <Options
                    setSort={setSort}
                    setFilter={setFilter}
                    setOrder={setOrder}
                >
                    {" "}
                </Options>
            </div>
            <Books>
                {data
                    .filter((el) => el.rating > filter)

                    .map((el) => (
                        <Link to={`/book/${el.id}`} key={el.id}>
                            <div>
                                <Book {...el}></Book>
                            </div>
                        </Link>
                    ))}
            </Books>
            <div style={{ marginBottom: "20px" }}>
                <button
                    disabled={page === 1}
                    onClick={() => {
                        setPage(page - 1);
                    }}
                >
                    Prev Page
                </button>
                <button
                    disabled={page === Math.ceil(total / 10)}
                    onClick={() => {
                        setPage(page + 1);
                    }}
                >
                    Next Page
                </button>
            </div>
        </div>
    );
}
