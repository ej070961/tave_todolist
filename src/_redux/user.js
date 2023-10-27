
import { findUser, saveUser } from '../firebase/firebase_user';
//사용자의 상태를 관리 
//Actions
const SIGN_IN = 'user_reducer/signin';
const SIGN_UP = 'user_reducer/signup';
const LOGOUT = 'user_reducer/logout';
const AUTH = 'user_reducer/auth'

// Action Creators
export function signInUser(uid){
    
    const result = findUser(uid);

    return { 
        type: SIGN_IN,
        payload: result
    };

};

export function signUpUser(userdata){

    const result = saveUser(userdata);

    return{
        type: SIGN_UP,
        payload: result
    }

}

export function logoutUser(){

    return{
        type: LOGOUT,
        payload: null
    }
}

export function authUser(uid){

    const result = findUser(uid);

    return { 
        type: AUTH,
        payload: result
    };

}
   

//Reducer
export default function (state = {}, action){
    switch (action.type) {
        case SIGN_IN:
            return {...state, userData: action.payload} //state를 똑같이 가져오고, user_actions의 payload를 넣어줌 
        case SIGN_UP:
            return {...state}
        case LOGOUT:
            return {...state, userData: []}
        case AUTH:
            return {...state, userData: action.payload}
        default:
            return state;
    }
}