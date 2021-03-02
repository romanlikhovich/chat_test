import {messageListener, sendMessage, userEmit, userListener} from "../api";
import {MESSAGE_LISTENER, SEND_MESSAGE, USER_EMIT, USER_LISTENER} from "../types";

export const UserListener = () => {
    return async (dispatch) => {
        const {users, messages} = await userListener();
        dispatch({type: USER_LISTENER, payload: {users, messages}})
    }
}

export const UserAction = (users) => {
    return (dispatch) => {
        userEmit(users);
        dispatch({type: USER_EMIT})
    }
}

export const MessageAction = (message) => {
    return (dispatch) => {
        sendMessage(message);
        dispatch({type: SEND_MESSAGE})
    }
}


export const MessageListener = (msgs) => {
    return async (dispatch) => {
        const messages = await messageListener(msgs);
        dispatch({type: MESSAGE_LISTENER, payload: {messages}});
    }
}
