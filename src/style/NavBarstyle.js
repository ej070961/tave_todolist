import styled from "styled-components";

export const NavLayout = styled.nav`
  width: 100%;
  height: 4rem;
  padding: 0;
  background: #0061A8;
  z-index: 2; 
  align-items: center;
  display: flex; /* Use flexbox to horizontally align items */
  flex-direction: inline;
  justify-content: space-between;
  p{
    color: #FFF;
    font-family: 'Noto Sans', sans-serif;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 1rem;

    @media (max-width: 400px) {
      font-size: 1.7rem;
  }
  }
  a{
    color: #FFF;
    font-family: 'Noto Sans', sans-serif;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 1rem;
    cursor:pointer;
    @media (max-width: 400px) {
      font-size: 1.7rem;
  }
  }

`