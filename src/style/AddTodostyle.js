import styled from "styled-components";

export const ModalLayout = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40rem;
    height: 20rem;
    border-radius: 10px;
    border: 1px solid #C1C1C1;
    background: #FFF;

    display: flex;
    flex-direction: column;
    align-items: center;

    .modaltitle{
        width: 95%;
        color: #1B1D1F;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 400;
        margin: 0.4rem;
        align: center;
        margin-left: 15rem;

        @media (max-width: 420px) {
            font-size: 1.2rem;
            margin-left: 6rem;
        }
    }
    hr{
        width: 100%;
        height: 0.08rem;
        background: #C1C1C1;
        border: none;
        margin: 0;
    }
    .microphone{
        margin-top: 1rem;
        width: 2rem;
        height: 2rem;
        color: #1B1D1F;
    }

    @media (max-width: 420px) {
        width: 90%;

    }
`
export const ContentInput = styled.input`
    margin-top: 3rem;
    width: 90%;
    height: 4rem;
    border-radius: 10px;
    border: 1px solid #C1C1C1;
    background: #FFF;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 400;

`
export const SubmitBtn = styled.button`
    height: 2rem;
    width: 15rem;
    border-radius: 10px;
    background: #0061A8;
    color: #FFF;
    border: none;
    font-family: 'Noto Sans', sans-serif;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 1rem;
`
