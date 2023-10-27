import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import {getAuth, onAuthStateChanged} from "firebase/auth"
import { useNavigate } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { authUser } from '../_redux/user';
export default function (SpecificComponent, option){
    //유저가 로그인 상태인지 확인하기
    //파이어베이스 onAuthStateChanged 기능 이용  
    
    //option
    //  null >  아무나 출입이 가능한 페이지
    // true > 로그인한 유저만 출입이 가능한 페이지
    // false > 로그인한 유저는 출입 불가능한 페이지 

    function AuthenticationCheck(props){
        
        const loggedin = localStorage.getItem('isLoggedIn');

        const auth = getAuth();
        const dispatch = useDispatch();
        const navigate = useNavigate();
        
        useEffect(()=>{
           
            onAuthStateChanged(auth, (userlogined)=>{
                if (userlogined){   
                        if(!option&& loggedin){
                                console.log("Logged in")
                                navigate('/')
                            
                        }
                        dispatch(authUser(userlogined.uid))

                }else{
                    if(option===true){
                        // 사용자가 로그아웃한 상태이고, 페이지가 로그인한 사용자만 허용하는 경우
                        console.log("not Logged in")
                        navigate('/signin')
                    }
                }
            })



           
        },[auth, navigate, dispatch, loggedin])
        
        return <SpecificComponent{...props} />
    }

    return AuthenticationCheck
}