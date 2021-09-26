import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Contexts/AuthContext";
import { useHistory } from "react-router-dom";

export default function Login() {
    const [data, setData] = useState({});
    const { handleTokenChange } = useContext(AuthContext);
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleLogin = async () => {
        try {
            const res = await axios.post("https://reqres.in/api/login", data);
            handleTokenChange(res.data.token);
            history.push("/");
        } catch (e) {
            alert("Invalid Credentials");
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <input
                type="text"
                placeholder="Enter Email"
                onChange={handleChange}
                name="email"
            />
            <br />
            <input
                type="password"
                placeholder="Enter Password"
                onChange={handleChange}
                name="password"
            />
            <br />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}
