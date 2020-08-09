import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
html{
    height:100%;
}
body{
    background-color: #435B5B;
    
    margin:0;
    padding:0 20px;
    display:flex;
    justify-content:center;
}
*{
    box-sizing: border-box;
    font-family: 'Catamaran',sans-serif;
    color: #fff

}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > h1 {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .score {
    font-size: 20px;
    color: #ffcea2;
    margin: 0;
  }

  .start,
  .next {
    padding: 10px 40px;
    cursor: pointer;
    color: #435b5b;
    background-color: #ffcea2;
    font-size: 15px;
    border: 2px solid #fff;
    border-radius: 20px;
  }

  .start,
  .next:hover {
    opacity: 0.7;
  }

  .next {
    margin-top: 10px;
  }
`;
