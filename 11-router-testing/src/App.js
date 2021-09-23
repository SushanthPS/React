import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/index";

function App() {
    return (
        <BrowserRouter>
            <Navbar></Navbar>
            <Switch>
                <Route path="/" exact>
                    Home Page
                </Route>
                <Route path="/contact">Contact Page</Route>
                <Route path="/about-us">About Page</Route>
                <Route path="/services">Services Page</Route>
                <Route path="/login">Login Page</Route>
                <Route>404 Error</Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
