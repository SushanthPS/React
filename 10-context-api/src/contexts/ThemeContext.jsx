import { createContext, useState } from "react";

export const ThemeContext = createContext({ theme: "", changeTheme: () => {} });

function Theme({ children }) {
    const [theme, setTheme] = useState("dark");
    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default Theme;
