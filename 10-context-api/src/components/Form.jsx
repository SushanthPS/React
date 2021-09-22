import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import styled from "styled-components";
import { useState } from "react/cjs/react.development";
import axios from "axios";

const Navbar = styled.div`
    height: 70px;
    width: 100vw;
    background-color: black;
    display: flex;
    justify-content: flex-end;

    button {
        margin: 10px;
        margin-right: 100px;
        width: 100px;
        font-size: 18px;
        background-color: orange;
        color: white;
        border-radius: 5px;
        border: none;
    }

    button:hover {
        background-color: #ca8300;
    }
`;

const Forms = styled.form`
    margin-top: 100px;

    input {
        padding: 10px 30px 10px 30px;
        border-radius: 5px;
        margin: 10px;
        border: 1px solid black;
    }

    input[type="submit"]:hover {
        background-color: #ffcece;
    }
`;

export default function Form() {
    const { isAuth, toggleAuth } = useContext(AuthContext);
    const [data, setData] = useState({});
    const [showForm, setShowFrom] = useState(true);
    const [token, setToken] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await axios.post("https://reqres.in/api/login", data);
            setToken(res.data.token);
            setShowFrom(false);
            toggleAuth();
        } catch (err) {
            alert("Invalid Credentials");
        }
    };

    return (
        <div>
            <Navbar>
                <button
                    onClick={() => {
                        setShowFrom(true);
                        if (isAuth) toggleAuth();
                    }}
                >
                    {isAuth ? "Logout" : "Login"}
                </button>
            </Navbar>
            {showForm ? (
                <Forms onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Email"
                        onChange={handleChange}
                        name="email"
                    />
                    <br />
                    <input
                        type="text"
                        placeholder="Password"
                        onChange={handleChange}
                        name="password"
                    />
                    <br />
                    <input type="submit" />
                </Forms>
            ) : (
                <div>
                    <h1>Login Successful</h1>
                    <h2>Your Token is: {token} </h2>
                </div>
            )}
        </div>
    );

    // return isAuth ? (
    //     <div>
    //         <h1>Token is: afdsfewr343sr</h1>
    //         <h1>Secret Data: 1, 2, 3, 4</h1>
    //     </div>
    // ) : (
    //     <h1>
    //         User is not logged in. Please{" "}
    //         <button onClick={toggleAuth}>Login</button>
    //     </h1>
    // );
}
