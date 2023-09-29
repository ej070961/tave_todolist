
import { findUser, saveUser } from '../firebase/firebase_user';

//Actions
const SIGN_IN = 'user_reducer/signin';
const SIGN_UP = 'user_reducer/signup'


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
    console.log(result);

    return{
        type: SIGN_UP,
        payload: result
    }

  
}
   



//Reducer
export default function (state = {}, action){
    switch (action.type) {
        case SIGN_IN:
            return {...state, loginSuccess: action.payload} //state를 똑같이 가져오고, user_actions의 payload를 넣어줌 
        case SIGN_UP:
            return {...state, register: action.payload}
        default:
            return state;
    }
}