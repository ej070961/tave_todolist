import styled from "styled-components";


export const MainpageLayout = styled.div`
    width: 100%;
    height: 100vh;
    opacity: 0.9;
    background: #E8EBED;
`

export const TodoTemplate = styled.div`
    width: 70%;
    height: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
    margin-top: 3rem;
`
export const TodoLayout = styled.div`
    display: flex;
    flex-direction: column;
    width: 32rem;
    height: 98%;
    margin: 1rem;
    border-radius: 15px;
    border: 0.1rem solid #C1C1C1;
    background: #FFF;
    .todotitle{
        color: #1B1D1F;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 500;
        margin: 0.4rem 1rem;
    }
    hr{
        width: 100%;
        height: 0.08rem;
        background: #C1C1C1;
        border: none;
    }
`

export const TodoContainer = styled.div`
    width: 90%;
    height: 3.3rem;
    border-radius: 10px;
    border: 1px solid #C1C1C1;
    background: #FFF;
    margin: 0.3rem;
    display: flex;
    flex-direction: row;  
    align-items: center;
    
    .checkbox{
        width: 2.2rem;
        height: 2.2rem;
        color: #454C53;
        margin: 1rem;
    }
    .content{
        color: #1B1D1F;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 400;
        margin: 1rem;
    }
`

export const AddButton = styled.button`
    width: 90%;
    height: 60px;
    border-radius: 10px;
    border: 1px dashed #C1C1C1;
    background: #FFF;
    margin: 0.5rem;
    display: flex;
    flex-direction: row;  
    align-items: center;

    .add_icon{
        width: 2.2rem;
        height: 2.2rem;
        color: #454C53;
        margin: 0.7rem;
    }

    .add_content{
        color: #1B1D1F;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 400;
        margin: 1rem;
    }

`

