import { useState } from "react";
import { v4 as uuid } from "uuid";
import { TodosItems } from "./Todositem";

const Todos = () => {
    const [text, setText] = useState("");
    const [todosList, setTodosList] = useState([]);

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleClick = () => {
        setTodosList([
            ...todosList,
            { status: false, title: text, id: uuid() },
        ]);
        setText("");
    };

    return (
        <div>
            <input
                value={text}
                onChange={handleChange}
                type="text"
                placeholder="Add Item"
            />
            <button onClick={handleClick}>Add</button>
            {todosList.map((e) => (
                <TodosItems key={e.id} {...e}></TodosItems>
            ))}
        </div>
    );
};

export { Todos };
