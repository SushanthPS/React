import { createContext, useState } from "react";

export const ThemeContext = createContext({
    toggle: false,
    changeTheme: () => {},
});

function Theme({ children }) {
    const [toggle, setToggle] = useState(false);
    const changeTheme = () => {
        setToggle(!toggle);
    };

    return (
        <ThemeContext.Provider value={{ toggle, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default Theme;
