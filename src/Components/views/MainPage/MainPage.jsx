import React, {useState} from 'react'
import NavBar from '../NavBar/NavBar'
import * as m from './Section/MainPagestyle'
import {BsCircle, BsPlusCircleDotted} from 'react-icons/bs'

import AddTodo from './Section/AddTodo'
function MainPage() {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <NavBar/>
      <m.MainpageLayout>
        <m.DateP>2023.09.26</m.DateP>
        <m.TodoLayout>
          <p className='todotitle'>To-do list</p>
          <hr/>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <m.TodoContainer>
            <BsCircle className='checkbox'/>
            <p className='content'>TODO리스트 작성하기</p>
          </m.TodoContainer>
          <m.AddButton onClick={()=>setModalIsOpen(!modalIsOpen)}>
            <BsPlusCircleDotted className='add_icon'/>
            <p className='add_content'>새로운 할 일 생성하기</p>
          </m.AddButton>
          </div>
        </m.TodoLayout>
      </m.MainpageLayout>
      {modalIsOpen && <AddTodo onClose={setModalIsOpen} />}
    </div>
  )
}

export default MainPage