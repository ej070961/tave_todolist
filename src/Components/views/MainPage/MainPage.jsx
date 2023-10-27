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
import {GoChevronLeft, GoChevronRight} from 'react-icons/go'

import dayjs from 'dayjs'
import TodoItem from './Section/TodoItem'
function MainPage() {
  const [currentUser, setcurrentUser] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(
    dayjs().format('YYYY-MM-DD')
  ); 

  const user = useSelector(state=>state.User.userData);

  const dispatch = useDispatch();

  useEffect(()=>{

    if(user && Object.keys(user).length > 0){
      setcurrentUser(user);
    
    }else{
      console.log("No user")
    }

    if(currentUser){
        dispatch(initializeTodo({
          uid: currentUser.Uid,
          time: selectedDay
        }))
    }

  }, [user, currentUser, selectedDay]);

  const handlePrevDate = () =>{
    const newDate = dayjs(selectedDay) //현재 선택된 날짜(selectedDay)를 기반으로 새로운 날짜를 계산
    .subtract(1, 'date') //1일 전으로 이동
    .format('YYYY-MM-DD'); //날짜를 'YYYY-MM-DD' 형식의 문자열로 변환
    console.log(newDate)
    setSelectedDay(newDate); //선택된 날짜를 새로 계산된 날짜로 업데이트

  }

  const handleNextDate = () =>{
    const currentDate = dayjs(selectedDay) //현재 선택된 날짜(selectedDay)를 기반으로 새로운 날짜를 계산
    const date = currentDate.get('date');
    const nextDate = currentDate.set('date', date+1).format('YYYY-MM-DD');
    setSelectedDay(nextDate); //선택된 날짜를 새로 계산된 날짜로 업데이트

  }

  if(currentUser !== undefined){

  return (
    <m.MainpageLayout>
      <NavBar/>
      <m.TodoTemplate>
        <m.leftContainer>
       
          <MyProfile/>
          <CalendarBoard selectedDay={selectedDay} setSelectedDay={setSelectedDay}/>
        </m.leftContainer>

        <m.TodoLayout>
          <div style={{width: '100%', display: 'flex', flexDirection: 'inline', alignItems: 'center', justifyContent: 'center'}}> 
          <GoChevronLeft style={{width: '1.3rem', height: '1.3rem', cursor: 'pointer'}} onClick={handlePrevDate}/>
          <p className='todotitle'>{dayjs(selectedDay).year()}년 {dayjs(selectedDay).month()+1}월 {dayjs(selectedDay).date()}일</p>
          <GoChevronRight style={{width: '1.3rem', height: '1.3rem', cursor: 'pointer'}} onClick={handleNextDate}/>
          </div>
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