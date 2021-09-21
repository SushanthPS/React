import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function Form() {
    const { token, giveToken } = useContext(AuthContext);
    return token ? (
        <div>
            <h1>Token is: {token}</h1>
            <h1>Secret Data: 1, 2, 3, 4</h1>
        </div>
    ) : (
        <h1>
            User is not logged in. Please{" "}
            <button onClick={giveToken}>Login</button>
        </h1>
    );
}
