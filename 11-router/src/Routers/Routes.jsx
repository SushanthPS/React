import { Route, Switch } from "react-router-dom";
import Error from "../Components/Error";
import Products from "../Components/Products";
import ProductPage from "../Components/ProductPage";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact>
                <img
                    src="https://cdn.dribbble.com/users/1480043/screenshots/3175346/bagley_dektop.gif"
                    alt=""
                />
            </Route>
            <Route exact path="/products">
                <Products></Products>
            </Route>
            <Route path="/products/:id">
                <ProductPage></ProductPage>
            </Route>
            <Route>
                <Error></Error>
            </Route>
        </Switch>
    );
}
