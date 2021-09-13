import { useState } from "react";
import { v4 as uuid } from "uuid";
import TodoList from "./TodoList";

export default function Todo() {
    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value);
    };

    const [todoList, setTodoList] = useState([]);
    const addTodo = () => {
        const data = { status: false, title: text, id: uuid() };
        setTodoList([...todoList, data]);
        setText("");
    };

    const toggleStatus = (ele) => {
        const updatedList = todoList.map((e) =>
            //when we find matching id's, only change status for that id, for the rest return element without changing anything
            e.id === ele.id ? { ...e, status: !e.status } : e
        );
        setTodoList(updatedList);
    };

    return (
        <div className="flex-column">
            <div>
                <input
                    type="text"
                    placeholder="Write Something"
                    onChange={handleChange}
                    value={text}
                />
                <button className="addButton buttonC" onClick={addTodo}>
                    +
                </button>
            </div>

            <div className="flex-column">
                <TodoList
                    todoList={todoList}
                    toggleStatus={toggleStatus}
                ></TodoList>
            </div>
        </div>
    );
}
