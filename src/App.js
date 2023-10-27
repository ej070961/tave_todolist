import React from "react";
import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom";
import SigninPage from './Components/views/SignUpInPage/SigninPage'
import SignupPage from "./Components/views/SignUpInPage/SignupPage";
import MainPage from "./Components/views/MainPage/MainPage";
function App() {


  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/signin" element={<SigninPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
