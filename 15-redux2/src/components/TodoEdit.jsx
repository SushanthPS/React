import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
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
        padding-top: 10px;
    }

    input {
        padding: 10px;
        margin-top: 50px;
    }

    .update {
        padding: 10px;
        margin-top: 20px;
        background-color: teal;
        color: white;
        font-weight: 700;
        border: none;
    }

    .update:hover {
        background-color: #005353;
    }
`;

export default function TodoEdit() {
    const { id } = useParams();
    const [ele, setEle] = useState({});
    const [text, setText] = useState("");

    const getEle = async () => {
        const res = await axios.get(`http://localhost:3001/todos/${id}`);
        setEle(res.data);
    };

    const handleUpdate = async () => {
        if (text === "") alert("Name cannot be empty");
        else {
            await axios.patch(`http://localhost:3001/todos/${id}`, {
                title: text,
            });
            getEle();
            setText("");
        }
    };

    useEffect(() => {
        getEle();
    }, []);

    return (
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
                <h1>Edit Menu</h1>
                <h3>Todo Name: {ele.title}</h3>
                <input
                    type="text"
                    placeholder="New Todo Name"
                    onChange={(e) => setText(e.target.value)}
                />
                <br />
                <button onClick={handleUpdate} className="update">
                    Update
                </button>
            </Container>
        </div>
    );
}
