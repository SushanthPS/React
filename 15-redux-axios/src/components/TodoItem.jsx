import axios from "axios";
import { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    position: relative;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 30%;
    height: 300px;
    margin-top: 150px;

    h1 {
        color: goldenrod;
        text-decoration: underline;
        padding-top: 30px;
    }

    h3 {
        margin-top: 50px;
        margin-bottom: 30px;
    }

    button {
        font-weight: 600;
        border: 1px solid grey;
        cursor: pointer;
        height: 30px;
        margin-top: 20px;
    }

    .toggle {
        background-color: yellow;
    }

    .delete {
        background-color: orange;
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

    .status {
        margin-bottom: 20px;
    }
`;

export default function TodoItem() {
    const { id } = useParams();
    const [el, setEl] = useState({});
    const [flag, setFlag] = useState(true);

    const getEle = async () => {
        const res = await axios.get(`http://localhost:3001/todos/${id}`);
        setEl(res.data);
    };

    useEffect(() => {
        getEle();
    }, []);

    const handleToggle = async () => {
        await axios.patch(`http://localhost:3001/todos/${el.id}`, {
            status: !el.status,
        });
        getEle();
    };

    const handleDelete = async () => {
        await axios.delete(`http://localhost:3001/todos/${el.id}`);
        alert("Todo Deleted");
        setFlag(false);
    };

    return flag ? (
        <div>
            <Link to="/">
                <button
                    className="home"
                    style={{
                        padding: "15px",
                        backgroundColor: "black",
                        color: "white",
                        fontWeight: "700",
                        marginTop: "20px",
                        cursor: "pointer",
                    }}
                >
                    Home
                </button>
            </Link>
            <Container>
                <h1>Todo Menu</h1>
                <h3>Todo Name: {el.title}</h3>
                <div className="status">
                    {el.status ? (
                        <span className="complete">Complete</span>
                    ) : (
                        <span className="incomplete">Incomplete</span>
                    )}
                </div>
                <div className="buttons">
                    <button onClick={handleToggle} className="toggle">
                        Toggle
                    </button>
                    <button onClick={handleDelete} className="delete">
                        Delete
                    </button>
                </div>
            </Container>
        </div>
    ) : (
        <Redirect to="/"></Redirect>
    );
}
