import React from 'react'
import * as n from '../../../style/NavBarstyle';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {logoutUser} from '../../../_redux/user'

function NavBar() {
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () =>{
    signOut(auth)
    .then(() => {
      dispatch(logoutUser());
      localStorage.removeItem('isLoggedIn'); //로그아웃 시 로컬 스토리지에서 제거 
      navigate('/signin')}) // logout successful
    .catch((error) => {
        console.log(error);
    }); // logout fail
  }
  return (
    <n.NavLayout>
       <p>ToDoToDo</p>
       <a onClick={handleLogout}>Logout</a>
          
       
    </n.NavLayout>
    
  )
}

export default NavBar