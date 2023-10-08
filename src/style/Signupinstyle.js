import styled from "styled-components";


export const SignLayout = styled.div`
    display: flex;
    flex-direction: inline;
`
export const ImgContainer = styled.div`
    width: 60%;

    @media (max-width: 830px) {

          display: none;
        
      }
`

export const FormContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title{
        color: #0061A8;
        font-family: 'Noto Sans', sans-serif;
        font-size: 2.5rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-top: 20vh;
    }
    .small{
        color: #000;
        font-family: 'Noto Sans', sans-serif;
        font-size: 1.3rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    span{
        color: #1A237E;
        font-family: 'Noto Sans', sans-serif;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        padding-left: 10px;
        cursor: pointer;
    }

    @media (max-width: 830px) {
        width:100%;
    }

`


export const Googlebtn  = styled.button`
    color: black;
    width: 20rem;
    padding: 10px 0px 10px 0px;
    cursor: pointer;
    display: flex;
    justify-content: center;  
    align-items: center;
    font-family: 'Noto Sans', sans-serif;
    font-size: 1.3rem;
    opacity: 0.8;
    border-radius: 10px;
    border: 1px solid #454C53;
    background: #FFF;
    margin: 0.8rem;


    hover{
        background: rgb(247,247,247);
          color: black;
    }
`
export const InputContainer = styled.input`
    color: black;
    width: 20rem;
    height: 2.6rem;
    border-radius: 10px;
    border: 2px solid #454C53;
    background: #FFF;
    margin: 10px;
    font-family: 'Noto Sans', sans-serif;
    font-size: 1.3rem;
`
export const InputLabel = styled.label`
    color: #0061A8;
    font-family: 'Noto Sans', sans-serif;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 500;
    width: 20rem;
    margin-top: 10px;


`
export const SubmitBtn = styled.button`
    height: 2.6rem;
    width: 20.1rem;
    border-radius: 10px;
    background: #0061A8;
    color: #FFF;
    border: none;
    font-family: 'Noto Sans', sans-serif;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`