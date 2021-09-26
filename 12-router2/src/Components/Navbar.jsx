import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
    width: 100vw;
    height: 70px;
    background-color: black;
    font-weight: 700;
    font-size: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
        text-decoration: none;
        margin: 20px;
        color: white;
    }
`;

export default function Navbar() {
    return (
        <Nav>
            <Link to="/">Homepage</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/users">Users</Link>
            <Link to="/login">Login</Link>
            <Link to="/about">About</Link>
        </Nav>
    );
}
