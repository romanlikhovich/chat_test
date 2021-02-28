import {
  LOGIN_ACTION,
  LOGIN_FAILED,
  REGISTER_ACTION,
  LOGOUT_ACTION,
} from "../types";

const initalState = {
  token: localStorage.getItem("token") || null,
  username: localStorage.getItem("username") || null,
  messages: [],
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
      return { ...state, isFail: true };

    case REGISTER_ACTION:
      return { ...state, isRegister: true };
    default:
      return { ...state };
  }
};
