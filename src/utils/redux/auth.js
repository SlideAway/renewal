import {createAction, handleActions} from "redux-actions";

const AUTHENTICATED = 'auth/AUTHENTICATED';
const UNAUTHENTICATED = 'auth/UNAUTHENTICATED';

export const authenticated = () => ({type:AUTHENTICATED});
export const unauthenticated = () => ({type:UNAUTHENTICATED})

const initialState = false;

function authenticate(state = initialState, action) {
    switch(action.type) {
        case AUTHENTICATED:
            return true;
        case UNAUTHENTICATED:
            return false;
        default:
            return state;
    }
}

export default authenticate;
