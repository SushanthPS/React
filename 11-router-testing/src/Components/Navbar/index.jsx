import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
    width: 100vw;
    background-color: black;
    display: flex;
    justify-content: center;
    margin-left: -8px;
    height: 60px;
    align-items: center;
    margin-top: -10px;

    a {
        text-decoration: none;
        font-size: 20px;
        margin: 10px 20px 10px 20px;
        color: white;
        font-weight: 700;
    }
`;

function NavBar() {
    return (
        <>
            <Nav>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about-us">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/login">Login</Link>
            </Nav>
        </>
    );
}

export default NavBar;
