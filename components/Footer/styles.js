import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  padding: 15px;
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.white};
  a {
    text-decoration: none;
    font-style: italic;
    font-size: 14px;
    color: ${({ theme }) => theme.white};
  }
  @media (max-width: 600px) {
    .flex-div {
      font-size: 10px;
      span {
        display: none;
      }
    }
    .link-div {
      a {
        font-size: 10px;
      }
      justify-content: space-between;
      padding: 5px;
      width: 100%;
    }
  }
`;
