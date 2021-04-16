import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getAuthUserData} from "./auth-reducer";
import {withAuthRedirect} from "../hoc/withAuthRedirect";

const INITIALIZED_SUCCESS = 'SET_USER_DATA';


let initialState = {
    initialized: false,
};


export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}


export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
        dispatch(initializedSuccess());
    });
}

