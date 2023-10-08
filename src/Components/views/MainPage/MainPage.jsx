import React, {useState, useEffect} from 'react'
import NavBar from '../NavBar/NavBar'
import * as m from '../../../style/MainPagestyle'
import {BsCircle, BsPlusCircleDotted} from 'react-icons/bs'
import MyProfile from './Section/MyProfile'
import AddTodo from './Section/AddTodo'
import CalendarBoard from './Section/CalendarBoard'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { initializeTodo } from '../../../_redux/todo'
import auth from '../../../hoc/auth'

import dayjs from 'dayjs'
import TodoItem from './Section/TodoItem'
function MainPage() {
  const [currentUser, setcurrentUser] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(
    dayjs().format('YYYY-MM-DD')
  );

  // const [todos, setTodos] = useState([]);
  const user = useSelector(state=>state.User.userData);

  const dispatch = useDispatch();

  useEffect(()=>{

    if(user && Object.keys(user).length > 0){
      console.log(user);
      setcurrentUser(user);
    
    }else{
      console.log("No user")
    }

    if(currentUser){
      console.log(selectedDay);
        dispatch(initializeTodo({
          uid: currentUser.Uid,
          time: selectedDay
        }))
    }

  }, [user]);


  if(currentUser !== undefined){

  return (
    <m.MainpageLayout>
      <NavBar/>
      <m.TodoTemplate>
        <div style={{width: '50%', height: '100%',  display:'flex', flexDirection: 'column', alignItems: 'center'}}>
          <MyProfile/>
          <CalendarBoard/>
        </div>

        <m.TodoLayout>
          <p className='todotitle'>{dayjs(selectedDay).year()}년 {dayjs(selectedDay).month()+1}월 {dayjs(selectedDay).date()}일</p>
          <hr/>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TodoItem/> {/*할일 목록 렌더링 파일 */}
          <m.AddButton onClick={()=>setModalIsOpen(!modalIsOpen)}>
            <BsPlusCircleDotted className='add_icon'/>
            <p className='add_content'>새로운 할 일 생성하기</p>
          </m.AddButton>
          </div>
        </m.TodoLayout>
      </m.TodoTemplate>
    
      {modalIsOpen && <AddTodo onClose={setModalIsOpen} />}
  </m.MainpageLayout>
  )

}else{
  <div>
    로딩중...
  </div>
}
}

export default auth(MainPage, true);