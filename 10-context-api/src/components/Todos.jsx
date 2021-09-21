import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Todos() {
    const { theme, changeTheme } = useContext(ThemeContext);

    return (
        <div>
            <h1>Theme: {theme}</h1>
            <button onClick={changeTheme}>Change Theme</button>
        </div>
    );
}
