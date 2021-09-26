import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { Redirect, Route } from "react-router-dom";

export default function PrivateRoutes({ children, exact, path, to }) {
    const { token } = useContext(AuthContext);
    if (!token) {
        return <Redirect to={to}></Redirect>;
    }
    return (
        <Route exact={exact} path={path}>
            {children}
        </Route>
    );
}
