import React from 'react'
import * as a from './AddTodostyle'
import {FaMicrophone} from 'react-icons/fa'
import {ImCancelCircle} from 'react-icons/im'
function AddTodo(props) {

    const {onClose} = props;

    const handleCloseModal = () => {
        onClose(false);

    };
    return (
        <a.ModalLayout>
            <div style={{ width: '95%', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <p className='modaltitle'>할 일 추가하기</p>
                <ImCancelCircle onClick={handleCloseModal} style={{width: '1.8rem', height: '1.8rem', marginLeft: '12rem', color:'#1B1D1F'}}/>
            </div>
            <hr/>
            <a.ContentInput>

            </a.ContentInput>
            <FaMicrophone className='microphone'/>
            <a.SubmitBtn>등록하기</a.SubmitBtn>
        </a.ModalLayout>
    )
}

export default AddTodo