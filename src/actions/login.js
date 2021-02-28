import {login, logout} from '../api';
import {LOGIN_ACTION, LOGIN_FAILED, LOGOUT_ACTION} from "../types";

export const LoginAction = (username, password) => {
    return async (dispatch) => {
        try {
            const data = await login(username, password);
            dispatch({type: LOGIN_ACTION, payload: data});
        } catch (error) {
            dispatch({type: LOGIN_FAILED, payload: null});
        }
    }
}

export const LogoutAction = () => {
    return async (dispatch) => {
        await logout()
        dispatch({ type: LOGOUT_ACTION, payload: null });
    };
}
