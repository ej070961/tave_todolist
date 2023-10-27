import { saveTodo, findallTodo, updateCompleted, deleteItem } from "../firebase/firebase_todo";

//Actions
const ADD_TODO = 'todo_reducer/addtodo';
const INITIALIZE_TODOS = 'todo_reducer/initializetodo'
const COMPLETE_TODO = 'todo_reducer/completetodo'
const DELETE_TODO = 'todo_reducer/deletetodo'
// Action Creators
export function addTodo(data){
    
    const todoData = saveTodo(data);


    return { 
        type: ADD_TODO,
        payload: todoData
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

export async function completeTodo(todoId, index, completed){
    try{

        updateCompleted(todoId, completed);
        // console.log(todos);
        return{
            type: COMPLETE_TODO,
            payload: {
                index: index,
                completed: completed
            }
        }
    }catch(error){
        console.error("Todo 데이터 업데이트 실패:", error);
        throw error;
    }
    
}

export async function deleteTodo(todoId, index){
    try{

        deleteItem(todoId);
        // console.log(todos);
        return{
            type: DELETE_TODO,
            payload: todoId
        }
    }catch(error){
        console.error("Todo 데이터 업데이트 실패:", error);
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
        case COMPLETE_TODO:
            const index = action.payload.index;
            const updatedTodos = [...state.todos];
            state.todos[index].Completed = action.payload.completed;
            return {...state, todos: updatedTodos}

        case DELETE_TODO:
            const Todos = state.todos.filter(todo => todo.TodoId !== action.payload);
            return {
                ...state,
                todos: Todos,
              };
        default:
            return state;
    }
}