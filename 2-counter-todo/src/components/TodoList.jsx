import TodoItem from "./TodoItem";

export default function TodoList({ todoList, toggleStatus }) {
    return todoList.map((ele) => (
        <div key={ele.id} className="flex-row margin-top">
            <TodoItem ele={ele} toggleStatus={toggleStatus}></TodoItem>
        </div>
    ));
}
