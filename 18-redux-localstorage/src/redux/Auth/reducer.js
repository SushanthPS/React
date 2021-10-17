import { loadData, saveData } from "../../utils/localStorage";
import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./actionTypes";

const initState = {
    isAuth: loadData("isAuth") || false,
    token: loadData("token") || "",
};

export const AuthReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case LOGIN_SUCCESS:
            saveData("isAuth", true);
            saveData("token", payload);
            return {
                ...state,
                isAuth: true,
                token: payload,
            };
        case LOGIN_FAILURE:
            saveData("isAuth", false);
            saveData("token", "");
            return {
                ...state,
                isAuth: false,
                token: "",
            };
        default:
            return state;
    }
};
