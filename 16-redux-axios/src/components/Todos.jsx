import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addTodo,
    addTodoError,
    addTodoLoading,
    addTodoSuccess,
} from "../redux/actions";
import axios from "axios";

export default function Todos() {
    const { data, isLoading, isError } = useSelector((store) => store.todos);
    const dispatch = useDispatch();
    const [text, setText] = useState("");

    const handleAddTodo = async () => {
        try {
            dispatch(addTodoLoading());
            const res = await axios.post("http://localhost:3001/todos", {
                status: false,
                title: text,
            });
            dispatch(addTodoSuccess());
        } catch (e) {
            dispatch(addTodoError(e.message));
        }

        dispatch(addTodo(text));
    };

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
