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
    align-items: center;
    background: ${({ theme }) => theme.dark};
    color: ${({ theme }) => theme.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    font-family: 'IBM Plex Mono', monospace;
  }`;
