import { Switch, Link, Route } from "react-router-dom";
import Todos from "../components/Todos";
import styled from "styled-components";
import Login from "../components/Login";
import { useDispatch } from "react-redux";
import { loginFailure } from "../redux/Auth/actions";

const Links = styled.div`
    border: 1px solid black;
    margin-bottom: 100px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;

    a {
        color: inherit;
        text-decoration: inherit;
    }

    & > a,
    button {
        font-weight: 700;
        margin: 70px;
        padding: 14px;
        background-color: white;
    }

    button {
        padding: 16px;
        cursor: pointer;
        border: 1px solid black;
    }
`;

export default function Routes() {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(loginFailure());
    };
    return (
        <>
            <Links className="links">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <button
                    onClick={() => {
                        handleLogout();
                    }}
                >
                    Logout
                </button>
            </Links>
            <Switch>
                <Route path="/" exact>
                    <Todos />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route>404 Error</Route>
            </Switch>
        </>
    );
}
