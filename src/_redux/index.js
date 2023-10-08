import {combineReducers} from "redux"
import User from './user'
import Todo from './todo'
const rootReducer = combineReducers({
    User, Todo
})
export default rootReducer