import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.div`
    width: 100vw;
    height: 70px;
    background-color: black;
    color: white;
    display: flex;
    justify-content: space-between;

    img {
        height: 100%;
    }

    a {
        text-decoration: underline;
        color: white;
        font-weight: 700;
        font-size: 25px;
        align-self: center;
        margin-right: 60px;
    }
`;

export default function Navbar() {
    return (
        <Nav>
            <img
                src="https://i.pinimg.com/originals/dd/64/da/dd64da585bc57cb05e5fd4d8ce873f57.png"
                alt=""
            />
            <Link to="/">Dashboard</Link>
        </Nav>
    );
}
