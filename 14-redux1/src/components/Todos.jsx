import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/actions";

export default function Todos() {
    const todo = useSelector((store) => store.todos);
    const dispatch = useDispatch();
    console.log("Todo", todo);
    return (
        <div style={{ marginTop: "50px" }}>
            <input type="text" placeholder="Enter todo" />
            <button
                onClick={() => {
                    dispatch(addTodo("Learn react"));
                }}
            >
                Add todo
            </button>
        </div>
    );
}
