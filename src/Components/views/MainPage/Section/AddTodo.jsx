import React,{useState} from 'react'
import * as a from '../../../../style/AddTodostyle'
import {FaMicrophone} from 'react-icons/fa'
import {ImCancelCircle} from 'react-icons/im'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { addTodo } from '../../../../_redux/todo';
import dayjs from 'dayjs';
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition';
function AddTodo(props) {
    const user = useSelector(state=>state.User.userData);
    const {onClose} = props;
    const [Todo, setTodo] = useState("");
    const {transcript, listening, resetTranscript} = useSpeechRecognition();

    //음성인식이 활성화 되어있는지 확인
    const toggleListening = () => {
        if (listening) {
            //활성화되어 있다면 음성인식을 중지
            SpeechRecognition.stopListening();
            console.log("음성인식 종료");
            setTodo(transcript);
            resetTranscript(); // Reset any previous transcripts
           
        } else {
            //활성화되어있지 않다면 음성인식 시작 
            resetTranscript(); // Reset any previous transcripts
            SpeechRecognition.startListening({ language: 'ko-KR', continuous: true});
            console.log("음성인식 시작");
        }
       
      }

    const dispatch = useDispatch();
    const handleCloseModal = () => {
        setTodo('');
        onClose(false);

    };

    const handleChange = (e)=>{
        setTodo(e.target.value);
    }

    const handleSubmit = (e)=>{
        if (Todo && Todo.trim() !== '') { // Check if Todo is not empty or only contains whitespaces

            let variable = {
                Time: dayjs().format('YYYY-MM-DD'),
                Content: Todo,
                Uid: user.Uid,
                Completed: false
            }

            
            dispatch(addTodo(variable));
            handleCloseModal();
        }   
        



    }
    return (
        <a.ModalLayout>
            <div style={{ width: '95%', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <p className='modaltitle'>할 일 추가하기</p>
                <ImCancelCircle onClick={handleCloseModal} style={{width: '1.8rem', height: '1.8rem', marginRight: '1rem', color:'#1B1D1F'}}/>
            </div>
            <hr/>
            <a.ContentInput type="text" value={Todo} onChange={handleChange}>

            </a.ContentInput>
            <FaMicrophone className='microphone' onClick={toggleListening}/>
            {listening && <div>인식 중..말하기 종료 시 버튼을 다시 클릭해주세요</div>}
            <a.SubmitBtn onClick={handleSubmit}>등록하기</a.SubmitBtn>
        </a.ModalLayout>
    )
}

export default AddTodo