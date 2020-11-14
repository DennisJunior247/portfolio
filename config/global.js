import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
   
  }

  body {
     font-size:16px;
  
    color: ${({ theme }) => theme.white};
    font-family: ${({ theme }) => theme.fontFamily};
     transition: all 0.3s ease-in-out;

      p{
        font-size:16px
    }
    h1{
           font-size:36px 
    }
      h2{
           font-size:24px 
    }
  }`;
