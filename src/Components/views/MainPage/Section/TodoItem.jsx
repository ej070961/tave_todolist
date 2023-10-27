import React, { useEffect } from 'react'
import * as m from '../../../../style/MainPagestyle'
import { useSelector, useDispatch } from 'react-redux'
import {BsCircle, BsCheckCircleFill} from 'react-icons/bs'
import {AiOutlineDelete} from 'react-icons/ai'
import { completeTodo, deleteTodo } from '../../../../_redux/todo'
function TodoItem() {
    const todos = useSelector(state=>state.Todo.todos);
    const dispatch = useDispatch();

    const handleComplete = (todoId, index, completed) => {
        console.log(todoId, index);
        dispatch(completeTodo(todoId, index, completed))
     
    }

    const handleDelete = (todoId) =>{
        dispatch(deleteTodo(todoId))
    }
    return (
        <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            {todos && todos.map((todo,index)=>(
                todo.Completed ?   
                <m.TodoContainer key={index} >
                <BsCheckCircleFill className='checkbox' onClick={()=>handleComplete(todo.TodoId, index, false)}/>
                <li className='content'style={{ textDecoration: 'line-through' }}>{todo.Content}</li>
                <AiOutlineDelete className='delete' onClick={()=>handleDelete(todo.TodoId)}/>
                </m.TodoContainer>
        
                :
                <m.TodoContainer key={index}>
                <BsCircle className='checkbox' onClick={()=>handleComplete(todo.TodoId, index, true)}/>
                <li className='content'  style={{ textDecoration: 'none' }}>{todo.Content}</li>
                <AiOutlineDelete className='delete' onClick={()=>handleDelete(todo.TodoId)}/>
                </m.TodoContainer>
       
            ))}
     </div>
    )
}

export default TodoItem