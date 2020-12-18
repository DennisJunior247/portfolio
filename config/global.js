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

  
    color: ${({ theme }) => theme.white};
    font-family: ${({ theme }) => theme.fontFamily};
     transition: all 0.3s ease-in-out;
  }`;
