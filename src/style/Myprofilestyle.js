import styled from 'styled-components';

export const ProfileLayout = styled.div`
    width: 30rem;
    height: 30%;
    border-radius: 15px;
    margin: 0.3rem;
    border: 0.1rem solid #C1C1C1;
    background: #FFF;

    .no-color{
        color: #1B1D1F;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 500;
        margin: 1rem 1rem;
    }
    .color{
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 500;
        margin: 0.8rem;
        color: #0061A8;
        
    }
    .subtext{
        color: #1B1D1F;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 500;
        margin: 0.5rem 1.8rem;
    }

    @media (max-width: 420px) {
        width: 90%;
    }
`