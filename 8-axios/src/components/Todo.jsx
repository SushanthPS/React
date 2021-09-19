import { useEffect, useState } from "react";
import axios from "axios";
import TodoItem from "./TodoItem";

export default function Todo() {
    const [text, setText] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [todoList2, setTodoList2] = useState([]);
    const [page, setPage] = useState(1);
    let [items, setItems] = useState(0);
    const [button, setButton] = useState(false);
    const limit = 3;

    //============================================================

    const getTodos = async (page) => {
        const res = await axios.get(`http://localhost:3001/todos`, {
            params: {
                _page: page,
                _limit: limit,
                status: false,
            },
        });
        setTodoList(res.data);
        setItems(res.headers["x-total-count"]);
    };

    const getTodos2 = async () => {
        const res = await axios.get(`http://localhost:3001/todos`, {
            params: {
                status: true,
            },
        });
        setTodoList2(res.data);
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
        getTodos2();
    };

    //============================================================

    const handleDelete = async (ele) => {
        await axios.delete(`http://localhost:3001/todos/${ele.id}`);
        getTodos(page);
        getTodos2();
    };

    //============================================================

    useEffect(() => {
        getTodos(page);
        getTodos2();
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
                    <TodoItem
                        el={el}
                        toggleStatus={toggleStatus}
                        handleDelete={handleDelete}
                    ></TodoItem>
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
                <div>
                    <button onClick={() => setButton(!button)}>
                        {button
                            ? "Hide Completed Todos"
                            : "Show Completed Todos"}
                    </button>
                </div>
                {button
                    ? todoList2.map((el) => (
                          <TodoItem
                              el={el}
                              toggleStatus={toggleStatus}
                              handleDelete={handleDelete}
                          ></TodoItem>
                      ))
                    : null}
            </div>
        </>
    );
}
