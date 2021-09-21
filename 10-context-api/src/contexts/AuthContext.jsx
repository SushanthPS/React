import { createContext, useState } from "react";

export const AuthContext = createContext({ token: "", giveToken: () => {} });

export default function AuthContextProvider({ children }) {
    const [token, setToken] = useState(false);

    const giveToken = () => {
        setToken("youAreAnoob");
    };
    return (
        <AuthContext.Provider value={{ token, giveToken }}>
            {children}
        </AuthContext.Provider>
    );
}
