import React,{useState} from 'react'
import * as s from './Section/Signupinstyle';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup} from 'firebase/auth';
import { signInUser, signUpUser } from '../../../_redux/user';

function SignupPage() {

  const [Visible, setVisible] = useState(false);

  const [UserName, setUserName] = useState("");
  const [Nickname, setNickname] = useState("");
  const [Uid, setUid] = useState();
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
        case 'name':
            setUserName(value);
            break;
        case 'email':
            setEmail(value);
            break;
        case 'password':
            setPassword(value);
            break;
        case 'nickname':
            setNickname(value);
            break;
        default:
            break;
    }
}; 

  const goLoginPage = () =>{
    navigate('/signin')

  }

  const handleGoogleSignUp = async (e) =>{
    e.preventDefault();
    const provider = new GoogleAuthProvider(); //Google 제공업체 객체의 인스턴스 생성 
    const auth = getAuth();

    try{
      const data = await signInWithPopup(auth, provider); //팝업창을 이용하여 로그인 과정 진행 (비동기 작업)
      console.log(data);
      const uid = data.user.uid; //로그인 시 사용자의 id 필요 
      console.log("uid : ",uid);

      const response = await dispatch(signInUser(uid))
      console.log(response);
      if(response.payload === false){
        setUserName(data.user.displayName);
        setEmail(data.user.email);
        setUid(data.user.uid);

        setVisible(!Visible);

      }else{
        alert('이미 회원가입 되어 있는 상태입니다. 로그인 하세요')
        navigate('/signin')
      }
    }
    catch(error){
      console.log(error);
    }
}

const handleEmailSignUp = (e) => {
  e.preventDefault();
  const auth = getAuth();

  createUserWithEmailAndPassword(auth, Email, Password)
  .then((userCredential)=>{
    //Signed in 
    const user = userCredential.user;
    console.log(user);
    setEmail(user.email);
    setUid(user.uid);

    // 계정 생성 성공한 후 RegisterForm 컴포넌트를 렌더링
    setVisible(!Visible);     
})
.catch((error)=>{
     // 오류 처리
     const errorCode = error.code;

     if(errorCode === "auth/email-already-in-use"){
      alert("이미 사용중인 이메일 주소입니다. 다른 이메일 주소를 사용하세요")
     }else{
      console.log(error);
     }
})
}

const onSubmit = async(e)=>{
  e.preventDefault();
  let variable = {
    Uid: Uid,
    UserName: UserName,
    Email: Email,
    Nickname: Nickname,

  }
  try{
    const response = await dispatch(signUpUser(variable))
    console.log(response);
    if(response.payload === "success"){
      navigate('/')
    }
  }catch(error){
    throw error;
  }

}

  return(
    <s.SignLayout>
      <s.ImgContainer>
        <img src='/todo.png' style={{height:'100vh', width:'100%'}} />
      </s.ImgContainer>
      {!Visible ?
      <s.FormContainer>
        <span className='title'>ToDoToDo</span>
        <s.Googlebtn onClick={handleGoogleSignUp}>
          <img src="google.png" width="20" height="20"/>
          <a style={{paddingLeft: '0.9rem'}}>Sign up with Google</a>
        </s.Googlebtn>
        <span className='or'>or</span>
        <s.InputContainer type="text" name="email" required placeholder='Email' value={Email} onChange={handleChange}/>
        <s.InputContainer type="password" name="password" required placeholder="Password" value={Password} onChange={handleChange}/>
        <s.SubmitBtn onClick={handleEmailSignUp}>Sign up</s.SubmitBtn>
        <p className="small">Do you have an account? <span onClick={goLoginPage}>Login!</span></p>
        </s.FormContainer>
        :        
        <s.FormContainer>
            <span className='title'>ToDoToDo</span>
            <s.InputLabel>이메일</s.InputLabel>
            <s.InputContainer type="text" name="email" required placeholder='Email' value={Email} readOnly/>
            <s.InputLabel>이름</s.InputLabel>
            <s.InputContainer  type="text" name="name" required placeholder="Name" value={UserName} onChange={handleChange}/>
            <s.InputLabel>닉네임</s.InputLabel>
            <s.InputContainer type="text" name="nickname" required placeholder="Nickname" value={Nickname} onChange={handleChange}/>
            <s.SubmitBtn onClick={onSubmit}>Submit</s.SubmitBtn>
        </s.FormContainer>
      

    }
   
    </s.SignLayout>

  )
}

export default SignupPage;