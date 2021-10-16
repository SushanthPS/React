import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addTodoError,
    addTodoLoading,
    addTodoSuccess,
    getTodoError,
    getTodoLoading,
    getTodoSuccess,
} from "../redux/actions";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const Container = styled.div`
    h1 {
        color: goldenrod;
    }

    a {
        color: inherit;
        text-decoration: inherit;
    }

    input {
        padding: 10px;
        padding-left: 15px;
        padding-right: 15px;
        margin-bottom: 20px;
    }

    button {
        padding: 10px;
    }

    .todo-item {
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        padding: 20px;
        font-size: 20px;
        display: flex;
        width: 25%;
        margin: auto;
        align-items: center;
        justify-content: space-around;
    }

    .todo-item > span,
    .todo-item > button {
        flex-basis: 100px;
    }

    .title {
        padding: 10px;
    }

    .incomplete {
        padding: 8px;
        background-color: red;
        color: white;
        font-weight: 600;
        border-radius: 10px;
        font-size: 15px;
        margin-left: 10px;
    }

    .complete {
        padding: 8px;
        background-color: #00b600;
        color: white;
        font-weight: 600;
        border-radius: 10px;
        font-size: 15px;
        margin-left: 10px;
    }

    .edit {
        padding: 8px;
        margin-left: 15px;
        justify-content: flex-end;
    }
`;

export default function Todos() {
    const { isLoading, isError, todos } = useSelector((store) => store);
    const dispatch = useDispatch();
    const [text, setText] = useState("");

    const handleAddTodo = async () => {
        dispatch(addTodoLoading());
        try {
            const data = { status: false, title: text };
            await axios.post("http://localhost:3001/todos", data);
            dispatch(addTodoSuccess());
            getTodos();
            setText("");
        } catch (err) {
            dispatch(addTodoError());
            console.log(err.message);
        }
    };

    const getTodos = async () => {
        dispatch(getTodoLoading());
        try {
            const res = await axios.get("http://localhost:3001/todos");
            dispatch(getTodoSuccess(res.data));
        } catch (error) {
            dispatch(getTodoError());
            console.log(error.message);
        }
    };

    useEffect(() => {
        getTodos();
    }, []);

    return isLoading ? (
        <h1>Loading...</h1>
    ) : isError ? (
        <h1>Error Occured</h1>
    ) : (
        <Container>
            <h1>TODO APP</h1>
            <div style={{ marginTop: "50px" }}>
                <input
                    type="text"
                    placeholder="Enter todo"
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                />
                <button onClick={handleAddTodo}>Add todo</button>
            </div>
            <div>
                {todos.map((el) => {
                    return (
                        <Link to={`/todo/${el.id}`}>
                            <div className="todo-item" key={el.id}>
                                <span className="title">{el.title}</span> -{" "}
                                {el.status ? (
                                    <span className="complete">Complete</span>
                                ) : (
                                    <span className="incomplete">
                                        Incomplete
                                    </span>
                                )}
                                <span>
                                    <Link to={`/todo/${el.id}/edit`}>
                                        <button className="edit">Edit</button>
                                    </Link>
                                </span>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </Container>
    );
}
