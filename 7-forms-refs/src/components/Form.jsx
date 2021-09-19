import { useEffect, useState } from "react";
import Input from "./Input";
import axios from "axios";
import Table from "./Table";

export default function Form() {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({});
    const [page, setPage] = useState(1);
    const [users, setUsers] = useState([]);
    const [sort, setSort] = useState(null);
    const [filter, setFilter] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const postData = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3001/users", formData);
        getData(page);
    };

    const getData = async (page) => {
        const res = await axios.get("http://localhost:3001/users", {
            params: {
                _page: page,
                _limit: 5,
                _sort: sort === null ? "id" : "salary",
                _order: sort === "highToLow" ? "desc" : "asc",
                department: filter,
            },
        });
        setUsers(res.data);
    };

    const deleteData = async (el) => {
        await axios.delete(`http://localhost:3001/users/${el.id}`);
        getData(page);
    };

    useEffect(() => {
        getData(page);
    }, [page, sort, filter]);

    return (
        <div className="mainDiv">
            <div>
                <button
                    className="formButton"
                    onClick={() => setShowForm(!showForm)}
                >
                    {showForm ? "Hide Form" : "Show Form"}
                </button>
            </div>
            {showForm ? (
                <div>
                    <Input
                        handleChange={handleChange}
                        handleSubmit={postData}
                    ></Input>
                </div>
            ) : (
                ""
            )}

            <div className="marginTop">
                <button
                    onClick={() => {
                        setSort("lowToHigh");
                    }}
                >
                    Low to High
                </button>
                <button
                    onClick={() => {
                        setSort("highToLow");
                    }}
                >
                    High to Low
                </button>
                <button
                    onClick={() => {
                        setSort(null);
                    }}
                >
                    Relevance
                </button>
            </div>
            <div>
                Filter:
                <button
                    onClick={() => {
                        setFilter("ec");
                    }}
                >
                    EC
                </button>
                <button
                    onClick={() => {
                        setFilter("cs");
                    }}
                >
                    CS
                </button>
                <button
                    onClick={() => {
                        setFilter("mech");
                    }}
                >
                    Mech
                </button>
                <button
                    onClick={() => {
                        setFilter(null);
                    }}
                >
                    All
                </button>
            </div>
            <div className="pageDiv">Page Number: {page}</div>

            <div>
                <Table users={users} deleteData={deleteData}></Table>
            </div>
            <div>
                <button disabled={page === 1} onClick={() => setPage(page - 1)}>
                    Prev Page
                </button>
                <button onClick={() => setPage(page + 1)}>Next Page</button>
            </div>
        </div>
    );
}
