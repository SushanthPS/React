import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import styled from "styled-components";
import axios from "axios";
import { loginSuccess } from "../redux/Auth/actions";

const Container = styled.div``;

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const isAuth = useSelector((store) => store.auth.isAuth);

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let payload = { email, password };
            let res = await axios.post("https://reqres.in/api/login", payload);
            dispatch(loginSuccess(res.data.token));
        } catch (err) {
            console.log(err.message);
            alert("Invalid Credentials");
        }
    };

    if (isAuth) return <Redirect to="/" />;

    return (
        <Container>
            <h1>Login Form</h1>

            <input
                type="text"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <input type="submit" onClick={handleSubmit} />
        </Container>
    );
}
