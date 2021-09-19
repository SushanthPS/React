import "./App.css";
import Navbar from "./components/Navbar";
import NavbarItem from "./components/NavbarItem";
import styled from "styled-components";
import { useState } from "react";

const Button = styled.button`
    border: 1px solid coral;
    background: ${(props) => (props.theme === "light" ? "red" : "blue")};
    border-radius: 5px;
    height: 60px;
    width: 120px;
    margin-top: 20px;
    font-size: 19px;
    color: ${(props) => (props.theme === "light" ? "white" : "black")};
`;

function App() {
    const [theme, setTheme] = useState("light");
    return (
        <div className="App">
            <Navbar>
                <div
                    className="left"
                    style={{
                        fontSize: "25px",
                        color: "white",
                        padding: "7px",
                        fontWeight: "700",
                        marginLeft: "20px",
                    }}
                >
                    {" "}
                    Masai School
                </div>
                <div className="right" style={{ display: "flex" }}>
                    <NavbarItem label="About">About</NavbarItem>
                    <NavbarItem label="Prices">Prices</NavbarItem>
                    <NavbarItem label="Start Page">Start Page</NavbarItem>
                </div>
            </Navbar>
            <Button
                theme={theme}
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
                Change Color
            </Button>
        </div>
    );
}

export default App;
