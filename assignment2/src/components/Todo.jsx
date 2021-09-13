import { useState } from "react";
import { v4 as uuid } from "uuid";

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
                <button className="addButton" onClick={addTodo}>
                    +
                </button>
            </div>

            <div className="flex-column">
                {todoList.map((ele) => (
                    <div key={uuid()} className="flex-row margin-top">
                        <div className="listItem flex-row">
                            {ele.title}{" "}
                            {ele.status ? (
                                <span className="check"></span>
                            ) : (
                                <span>❌</span>
                            )}
                        </div>
                        <button onClick={() => toggleStatus(ele)}>
                            &#10003;
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
