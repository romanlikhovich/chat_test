import {
    LOGIN_ACTION,
    LOGIN_FAILED,
    LOGOUT_ACTION,
    MESSAGE_LISTENER,
    REGISTER_ACTION,
    SEND_MESSAGE,
    USER_EMIT,
    USER_LISTENER
} from "../types";

const initalState = {
    token: localStorage.getItem("token") || null,
    username: localStorage.getItem("username") || null,
    messages: [],
    users: [],
    fullName: localStorage.getItem("fullName") || null,
    userId: localStorage.getItem("userId") || null,
    expirationToken: localStorage.getItem("expirationToken") || null,
    isFail: false,
    isRegister: localStorage.getItem("username") || null,
};

export const RootReducer = (state = initalState, action) => {
    switch (action.type) {
        case LOGIN_ACTION:
            console.log("In Login Action reducer");
            localStorage.setItem("token", "Bearer " + action.payload.token);
            localStorage.setItem("username", action.payload.username);
            localStorage.setItem("fullName", action.payload.fullName);
            localStorage.setItem("expirationToken", action.payload.expirationToken);
            localStorage.setItem("userId", action.payload.userId);
            return {
                ...state,
                token: "Bearer " + action.payload.token,
                username: action.payload.username,
                fullName: action.payload.fullName,
                expirationToken: action.payload.expirationToken,
                userId: action.payload.userId,
                isFail: false,
            };
        case LOGOUT_ACTION:
            localStorage.removeItem("token");
            localStorage.removeItem("username");
            localStorage.removeItem("fullName");
            localStorage.removeItem("userId");
            localStorage.removeItem("expirationToken");
            return {
                ...initalState,
            };
        case LOGIN_FAILED:
            console.log("LOIGN FAIL");
            return {...state, isFail: true};

        case REGISTER_ACTION:
            return {...state, isRegister: true};

        case USER_LISTENER:
            return {...state, messages: action.payload.messages, users: action.payload.users};
        case USER_EMIT:
            return {...state}
        case SEND_MESSAGE:
            return {...state}
        case MESSAGE_LISTENER:
            return {...state, messages: action.payload.messages}
        default:
            return {...state};
    }
};
