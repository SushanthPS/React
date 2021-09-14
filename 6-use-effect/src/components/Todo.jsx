import { useEffect, useState } from "react";

export default function Todo() {
    const [text, setText] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [error, setIsError] = useState(false);
    const [lastpage, setLastpage] = useState(100);
    const limit = 2;

    const handleTodo = (data) => {
        fetch("http://localhost:3001/todos", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(() => {
            getTodos();
            setText("");
        });
    };

    const getTodos = (page) => {
        fetch(`http://localhost:3001/todos?_page=${page}&_limit=${limit}`)
            .then((data) => data.json())
            .then((data) => {
                setTodoList(data);
                setLoading(false);
            })
            .catch((err) => {
                setIsError(true);
            });
    };

    const toggleStatus = (ele) => {
        ele.status = !ele.status;
        fetch(`http://localhost:3001/todos/${ele.id}`, {
            method: "PUT",
            body: JSON.stringify(ele),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(() => {
            getTodos(page);
        });
    };

    const handleDelete = (ele) => {
        fetch(`http://localhost:3001/todos/${ele.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(() => {
            getTodos(page);
        });
    };

    useEffect(() => {
        getTodos(page);

        //getting last page
        fetch(`http://localhost:3001/todos`)
            .then((data) => data.json())
            .then((data) => {
                let count = data.length;
                if (count % 2 == 0) setLastpage(count / 2 - 1);
                else setLastpage(Math.floor(count / 2));
            });
        //end of getting last page
    }, [page]);

    return loading ? (
        "Loading..."
    ) : error ? (
        "Error Loading files"
    ) : (
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
                    onClick={() => handleTodo({ title: text, status: false })}
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
                        disabled={page === lastpage + 1}
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
