import React from 'react'
import * as m from '../../../../style/Myprofilestyle'
import { useSelector } from 'react-redux';
function MyProfile() {

  const user = useSelector(state=>state.User.userData);
  const todos = useSelector(state=>state.Todo.todos);

  // Completed 필드가 false인 것만 가져오기 
  const incompleteTodos = todos.filter(todo => !todo.Completed);

  return (
    <m.ProfileLayout>
        <p className='no-color'><span className='color'>{user.Nickname}</span>님 반갑습니다.</p>
        <p className='subtext'>오늘의 할 일: <span style={{color: '#0061A8'}}>{todos.length}개</span></p>
        <p className='subtext'>오늘의 남은 할 일: <span style={{color: '#0061A8'}}>{incompleteTodos.length}개</span></p>
    </m.ProfileLayout>
  )
}

export default MyProfile