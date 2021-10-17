import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { addTodo } from "../redux/Todos/actions.js";
import { Redirect } from "react-router-dom";

const Container = styled.div`
    h1 {
        color: goldenrod;
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
    const isAuth = useSelector((store) => store.auth.isAuth);

    const todo = useSelector((store) => store.app.todos);
    const dispatch = useDispatch();
    const [text, setText] = useState("");
    const [edit, showEdit] = useState(false);
    const [item, setItem] = useState("");

    if (!isAuth) return <Redirect to="/login" />;

    return (
        <Container>
            <h1>TODO APP</h1>
            <div style={{ marginTop: "50px" }}>
                <input
                    type="text"
                    placeholder="Enter todo"
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                />
                <button
                    onClick={() => {
                        dispatch(addTodo(text));
                        setText("");
                    }}
                >
                    Add todo
                </button>
            </div>
            <div>
                {todo.map((el) => {
                    return (
                        <div className="todo-item" key={el.id}>
                            <span className="title">{el.title}</span> -{" "}
                            {el.status ? (
                                <span className="complete">Complete</span>
                            ) : (
                                <span className="incomplete">Incomplete</span>
                            )}
                            <span>
                                <button
                                    className="edit"
                                    onClick={() => {
                                        showEdit(!edit);
                                        setItem(el);
                                    }}
                                >
                                    Edit
                                </button>
                            </span>
                        </div>
                    );
                })}
            </div>
            {edit ? <TodoItem el={item} showEdit={showEdit} /> : ""}
        </Container>
    );
}
