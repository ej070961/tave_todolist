import React,{useState} from 'react'
import * as a from '../../../../style/AddTodostyle'
import {FaMicrophone} from 'react-icons/fa'
import {ImCancelCircle} from 'react-icons/im'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { addTodo } from '../../../../_redux/todo';
import dayjs from 'dayjs';
function AddTodo(props) {
    const user = useSelector(state=>state.User.userData);
    const {onClose} = props;
    const [Todo, setTodo] = useState();

    const dispatch = useDispatch();
    const handleCloseModal = () => {
        setTodo('');
        onClose(false);

    };

    const handleChange = (e)=>{
        setTodo(e.target.value);
    }

    const handleSubmit = ()=>{

        let variable = {
            Time: dayjs().format('YYYY-MM-DD'),
            Content: Todo,
            Uid: user.Uid,
            Completed: false
        }

        
        dispatch(addTodo(variable));
        handleCloseModal();



    }
    return (
        <a.ModalLayout>
            <div style={{ width: '95%', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <p className='modaltitle'>할 일 추가하기</p>
                <ImCancelCircle onClick={handleCloseModal} style={{width: '1.8rem', height: '1.8rem', marginLeft: '12rem', color:'#1B1D1F'}}/>
            </div>
            <hr/>
            <a.ContentInput type="text" value={Todo} onChange={handleChange}>

            </a.ContentInput>
            <FaMicrophone className='microphone'/>
            <a.SubmitBtn onClick={handleSubmit}>등록하기</a.SubmitBtn>
        </a.ModalLayout>
    )
}

export default AddTodo