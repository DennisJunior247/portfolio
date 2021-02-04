import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: #293335;
  color: #91abaa;
  margin: 0 auto;
  width: 100%;
  svg {
    width: 40px;
    height: 40px;
    @media (max-width: 762px) {
      width: 30px;
      height: 30px;
    }
  }
  ul {
    padding: 3rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    li {
      text-decoration: none;
      list-style: none;
      transition: all 0.2s;
      @media (max-width: 762px) {
        margin-bottom: 1.2rem;
        margin-left: 1.5rem;
      }
      &:hover {
        transform: scale(1.3);
      }
    }
  }
  a {
    text-decoration: none;
    color: #91abaa;
    cursor: pointer;

    &:hover {
      color: #fff;
    }
  }
`;
