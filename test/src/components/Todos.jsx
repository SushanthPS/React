import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addTodoError,
    addTodoLoading,
    addTodoSuccess,
    getTodoError,
    getTodoLoading,
    getTodoSuccess,
} from "../redux/actions.js";
import axios from "axios";

export default function Todos() {
    const { data, isLoading, isError } = useSelector((store) => store.todos);
    const dispatch = useDispatch();
    const [text, setText] = useState("");

    const handleAddTodo = async () => {
        try {
            dispatch(addTodoLoading());
            await axios.post("http://localhost:3001/todos", {
                status: false,
                title: text,
            });
            dispatch(addTodoSuccess());
            getTodos();
        } catch (e) {
            dispatch(addTodoError(e.message));
        }
    };

    const getTodos = async () => {
        try {
            dispatch(getTodoLoading());
            const res = await axios.get("http://localhost:3001/todos");
            dispatch(getTodoSuccess(res.data));
        } catch (e) {
            dispatch(getTodoError(e.message));
        }
    };

    useEffect(() => {
        getTodos();
    }, []);

    return isLoading ? (
        <div> Loading...</div>
    ) : isError ? (
        <div> Error Occured...</div>
    ) : (
        <div>
            <input
                type="text"
                placeholder="Enter todo"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                onClick={() => {
                    handleAddTodo();
                }}
            >
                Add todo
            </button>
            <br />
            <br />
            <div>
                {data.map((el, i) => (
                    <div key={i}>{el.title} </div>
                ))}
            </div>
        </div>
    );
}
