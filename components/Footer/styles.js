import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 10%;
  padding: 20px;
  font-size: 14px;
  font-style: italic;
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.white};
  a {
    text-decoration: none;
    font-style: italic;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.5s ease-in;
    color: ${({ theme }) => theme.white};
    &:hover {
      transform: scale(1.5);
      color: ${({ theme }) => theme.green};
      cursor: pointer;
    }
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
