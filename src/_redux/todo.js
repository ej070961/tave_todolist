import { saveTodo, findallTodo } from "../firebase/firebase_todo";

//Actions
const ADD_TODO = 'todo_reducer/addtodo';
const INITIALIZE_TODOS = 'todo_reducer/initializetodo'

// Action Creators
export function addTodo(data){
    
    saveTodo(data);


    return { 
        type: ADD_TODO,
        payload: data
    };

};

export async function initializeTodo(data){
    try{
        const todos = await findallTodo(data);
        console.log(todos);
        return{
            type: INITIALIZE_TODOS,
            payload: todos
        }
    }catch(error){
    console.error("Todo 데이터 초기화 실패:", error);
    throw error;
    }
    
}
   
//Reducer

const initialState = {
    todos:[]
}

export default function (state = initialState, action){
    switch (action.type) {
        case ADD_TODO:
            // 현재 todos 배열에 새로운 todo 데이터 추가
            const newTodos = [...state.todos, action.payload];
            return { ...state, todos: newTodos };
        case INITIALIZE_TODOS:
            return {...state, todos: action.payload}
        default:
            return state;
    }
}