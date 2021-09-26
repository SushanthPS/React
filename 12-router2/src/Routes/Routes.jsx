import { Route, Switch } from "react-router";
import UserDetails from "../Components/UserDetails";
import Users from "../Components/Users";
import Login from "../Components/Login";
import PrivateRoutes from "./PrivateRoutes";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact>
                Home Page
            </Route>
            <Route path="/contact">Contact Page</Route>
            <PrivateRoutes exact path="/users" to="/login">
                <Users></Users>
            </PrivateRoutes>
            <PrivateRoutes path="/users/:id" to="/login">
                <UserDetails />
            </PrivateRoutes>
            <Route path="/login">
                <Login></Login>
            </Route>
            <Route path="/about">About Page</Route>
            <Route>404 Page not Found</Route>
        </Switch>
    );
}
