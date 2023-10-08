import React, { useEffect } from 'react'
import * as m from '../../../../style/MainPagestyle'
import { useSelector } from 'react-redux'
import {BsCircle, BsPlusCircleDotted} from 'react-icons/bs'
function TodoItem() {
    const todos = useSelector(state=>state.Todo.todos);
    
    return (
        <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            {todos && todos.map((todo,index)=>(
                <m.TodoContainer key={index}>
                    <BsCircle className='checkbox'/>
                    <p className='content'>{todo.Content}</p>
                </m.TodoContainer>
            ))}
        </div>
    )
}

export default TodoItem