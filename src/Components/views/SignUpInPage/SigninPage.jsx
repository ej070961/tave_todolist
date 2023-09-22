import React,{useState} from 'react'
import * as s from './Section/Signupinstyle';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { signInWithEmailAndPassword, GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth';
import { signInUser } from '../../../_redux/user';
function SigninPage() {

  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
        case 'email':
            setEmail(value);
        break;
        case 'password':
            setPassword(value);
        break;
        default:
        break;
    }
  }
  const goSignup = () =>{
    navigate('/signup')

  }

  const handleGoogleSignIn = async (e) =>{
      e.preventDefault();
      const provider = new GoogleAuthProvider(); //Google 제공업체 객체의 인스턴스 생성 
      const auth = getAuth();

      try{
        const data = await signInWithPopup(auth, provider); //팝업창을 이용하여 로그인 과정 진행 (비동기 작업)
        console.log(data);
        const uid = data.user.uid; //로그인 시 사용자의 id 필요 
        console.log("uid : ",uid);

        const response = await dispatch(signInUser(uid))
        console.log(response.payload);
        if(response.payload === false){
          alert('회원가입을 진행해주세요')
          navigate('/signup')
        }else{
          navigate('/');
        }
      }
      catch(error){
        console.log(error);
      }
  }
  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try{  
      const data = await signInWithEmailAndPassword(auth, Email, Password)
        
      const uid = data.user.uid;
      const response = await dispatch(signInUser(uid)) //loginUser라는 액션에 body를 넣어줌 
      if(response.payload === false){
        alert('회원가입을 진행해주세요')
        navigate('/signup')
      }else{
        navigate('/');
      }
    }catch(error){
      console.log(error);
    }
  }

  return(
    <s.SignLayout>
      <s.ImgContainer>
        <img src='/todo.png' style={{height:'100vh', width:'100%'}} />
      </s.ImgContainer>
      <s.FormContainer>
        <span className='title'>ToDoToDo</span>
        <s.Googlebtn onClick={handleGoogleSignIn}>
          <img src="google.png" width="20" height="20"/>
          <a style={{paddingLeft: '0.9rem'}}>Login with Google</a>
        </s.Googlebtn>
        <span className='or'>or</span>
        <s.InputContainer type="text" name="email" required placeholder='Email' value={Email} onChange={handleChange}/>
        <s.InputContainer name="password" type="password" required placeholder="Password" value={Password} onChange={handleChange}/>
        <s.SubmitBtn onClick={handleEmailSignIn}>Login</s.SubmitBtn>
        <p className="small">No account?<span onClick={goSignup}>Sign up!</span></p>
      </s.FormContainer>
    </s.SignLayout>

  )
}

export default SigninPage;