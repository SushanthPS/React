import { useEffect, useState } from "react";
import axios from "axios";

export default function Todo() {
    const [text, setText] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [page, setPage] = useState(1);
    let [items, setItems] = useState(0);
    const limit = 3;

    //============================================================

    const getTodos = async (page) => {
        const res = await axios.get(`http://localhost:3001/todos`, {
            params: {
                _page: page,
                _limit: limit,
            },
        });
        setTodoList(res.data);
        setItems(res.headers["x-total-count"]);
    };

    //============================================================

    const postTodo = async (data) => {
        await axios.post("http://localhost:3001/todos", data);
        getTodos();
        setText("");
    };

    //============================================================

    const toggleStatus = async (ele) => {
        ele.status = !ele.status;
        await axios.put(`http://localhost:3001/todos/${ele.id}`, ele);
        getTodos(page);
    };

    //============================================================

    const handleDelete = async (ele) => {
        await axios.delete(`http://localhost:3001/todos/${ele.id}`);
        getTodos(page);
    };

    //============================================================

    useEffect(() => {
        getTodos(page);
    }, [page]);

    //============================================================

    return (
        <>
            <div className="page">Page Number: {page}</div>
            <div className="input">
                <input
                    value={text}
                    type="text"
                    placeholder="Add todo"
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                />
                <button
                    onClick={() => postTodo({ title: text, status: false })}
                >
                    Add todo
                </button>
            </div>

            <div className="main-list">
                {todoList.map((el) => (
                    <div className="items" key={el.id}>
                        {el.title} -{" "}
                        {el.status ? (
                            <span className="check"></span>
                        ) : (
                            <span>❌</span>
                        )}
                        <button
                            onClick={() => toggleStatus(el)}
                            className="toggleButtons"
                        >
                            Toggle
                        </button>
                        <button
                            className="toggleButtons"
                            onClick={() => {
                                handleDelete(el);
                            }}
                        >
                            Delete
                        </button>
                    </div>
                ))}

                <div className="page-buttons">
                    <button
                        disabled={page === 1}
                        onClick={() => {
                            setPage(page - 1);
                        }}
                    >
                        Prev Page
                    </button>
                    <button
                        disabled={page === Math.ceil(items / limit)}
                        onClick={() => {
                            setPage(page + 1);
                        }}
                    >
                        Next Page
                    </button>
                </div>
            </div>
        </>
    );
}
