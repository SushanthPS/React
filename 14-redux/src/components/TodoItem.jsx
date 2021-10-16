import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteTodo, toggleTodo } from "../redux/actions";

const Container = styled.div`
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    position: absolute;
    right: 20px;
    top: 100px;
    height: 250px;
    width: 400px;

    h2 {
        color: goldenrod;
        text-decoration: underline;
    }

    .close {
        font-size: 25px;
        position: absolute;
        right: 20px;
        top: 15px;
        color: goldenrod;
        cursor: pointer;
    }

    h3 {
        margin-top: 50px;
    }

    button {
        font-weight: 600;
        border: 1px solid grey;
        cursor: pointer;
        opacity: 0.6;
    }

    button:hover {
        opacity: 1.5;
    }

    .toggle {
        background-color: yellow;
    }

    .delete {
        background-color: orange;
    }
`;

export default function TodoItem({ el, showEdit }) {
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleTodo(el.id));
    };

    const handleDelete = () => {
        dispatch(deleteTodo(el.id));
        showEdit(false);
    };

    return (
        <Container>
            <span onClick={() => showEdit(false)} className="close">
                &#10006;
            </span>
            <h2>Edit Menu</h2>
            <h3>Todo Name: {el.title}</h3>
            <div className="buttons">
                <button onClick={handleToggle} className="toggle">
                    Toggle
                </button>
                <button onClick={handleDelete} className="delete">
                    Delete
                </button>
            </div>
        </Container>
    );
}
