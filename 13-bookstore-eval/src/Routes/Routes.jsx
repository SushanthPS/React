import { Route, Switch } from "react-router-dom";
import Home from "../Components/Home";
import BookDetails from "../Components/BookDetails";
import AuthorDetails from "../Components/AuthorDetails";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact>
                <Home></Home>
            </Route>
            <Route path="/book/:id">
                <BookDetails></BookDetails>
            </Route>
            <Route path="/author/:id">
                <AuthorDetails></AuthorDetails>
            </Route>
            <Route>
                <img
                    src="https://media3.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif"
                    alt=""
                />
            </Route>
        </Switch>
    );
}
