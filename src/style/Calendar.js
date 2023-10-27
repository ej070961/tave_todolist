import styled from 'styled-components';

export const CalendarWrapper = styled.div`
    width: 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.3rem;

    border-radius: 15px;
    border: 0.1rem solid #C1C1C1;
    background: #FFF;

    @media (max-width: 420px) {
        width: 90%;
    }
`

export const Header = styled.div`
    display: flex;
    flex-direction: inline-block;
    align-items: center;

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
    width:90%;
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
    width:90%;
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
    cursor:pointer;
    margin: 0.9rem;
    .not-selected{  
        text-align: center;
        list-style:none;
        color: #1B1D1F;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 1rem;
        font-style: normal;
        font-weight: 500;
    }

    .selected{  
        text-align: center;
        list-style:none;
        color: #0061A8;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 1rem;
        font-style: normal;
        font-weight: 500;
    }

    .checkbox-notselected{
        width: 1.5rem;
        height: 1.5rem;
        margin: 0.05rem;
        color:  #c1c1c1;
    }

    .checkbox-selected{
        width: 1.5rem;
        height: 1.5rem;
        margin: 0.05rem;
        color:   #0061A8;
    }

    @media (max-width: 400px) {
        margin: 0.5rem;
    }

`