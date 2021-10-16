import { Switch, Route } from "react-router-dom";
import TodoEdit from "../components/TodoEdit";
import TodoItem from "../components/TodoItem";
import Todos from "../components/Todos";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact>
                <Todos />
            </Route>
            <Route exact path="/todo/:id">
                <TodoItem />
            </Route>
            <Route path="/todo/:id/edit">
                <TodoEdit />
            </Route>
            <Route>
                <h1>404 ERROR</h1>
            </Route>
        </Switch>
    );
}
