import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 1rem;
  padding: 20px;
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.white};
  a {
    text-decoration: none;
    font-style: italic;
    font-size: 14px;
    color: ${({ theme }) => theme.white};
  }
`;
