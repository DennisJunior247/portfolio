import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 25%;
  /* padding: 10px; */
  background-color: ${({ theme }) => theme.dark};
  .icon {
    font-size: 25px;
    cursor: pointer;
    color: ${({ theme }) => theme.white};
  }
  a {
    cursor: pointer;
  }
`;
