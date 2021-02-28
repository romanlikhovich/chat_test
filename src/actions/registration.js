import {registration} from '../api';
import {REGISTER_ACTION, REGISTER_FAILED} from "../types";

export const RegistrationAction = (firstName, lastName, username, password) => {
    return async (dispatch) => {
        try {
            const data = await registration(firstName, lastName, username, password);
            dispatch({type: REGISTER_ACTION, payload: data});
        } catch (error) {
            dispatch({type: REGISTER_FAILED, payload: null});
        }
    }
}
