import styled from "styled-components";


export const MainpageLayout = styled.div`
    width: 100%;
    height: 91.3vh;
    opacity: 0.9;
    background: #E8EBED;
    display: flex;
    flex-direction: column;
    align-items: center;

`
export const DateP = styled.p`
    color: #1B1D1F;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    margin: 3rem 0 1rem 0;
`
export const TodoLayout = styled.div`
    width: 35rem;
    height: 45rem;
    border-radius: 15px;
    border: 0.1rem solid #C1C1C1;
    background: #FFF;
    .todotitle{
        color: #1B1D1F;
        font-family: 'Noto Sans', sans-serif;
        font-size: 1.8rem;
        font-style: normal;
        font-weight: 400;
        margin: 0.8rem;
    }
    hr{
        width: 35rem;
        height: 0.08rem;
        background: #C1C1C1;
        border: none;
    }
`

export const TodoContainer = styled.div`
    width: 90%;
    height: 3.2rem;
    border-radius: 10px;
    border: 1px solid #C1C1C1;
    background: #FFF;
    margin: 0.5rem;
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
        font-size: 1.3rem;
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
        font-size: 1.3rem;
        font-style: normal;
        font-weight: 400;
        margin: 1rem;
    }

`

