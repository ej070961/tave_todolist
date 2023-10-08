import styled from 'styled-components';

export const CalendarWrapper = styled.div`
    width: 27rem;
    height: 70%;
    margin: 0.3rem;
    border-radius: 15px;
    border: 0.1rem solid #C1C1C1;
    background: #FFF;
`

export const Header = styled.div`
    display: flex;
    flex-direction: inline-block;

    .yearandmonth{
        color: #1B1D1F;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 500;
        margin: 0.5rem 0.8rem;
    }
`
export const DayWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;
    max-width: 25rem;
    margin: 0.5rem auto;

    li{
        color: #1B1D1F;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 0.8rem;
        font-style: normal;
        font-weight: 500;
        list-style:none;
        text-align: center;
    }
`
export const CalendarBoard = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;
    max-width: 25rem;
    margin: 0.5rem auto;


`
export const DateContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    li{  
        text-align: center;
        list-style:none;
        color: #1B1D1F;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 1rem;
        font-style: normal;
        font-weight: 500;
    }

    .checkbox{
        width: 1.5rem;
        height: 1.5rem;
        margin: 0.05rem;
        color:  #c1c1c1;
    }

`