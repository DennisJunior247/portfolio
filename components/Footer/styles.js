import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: #293335;
  color: #91abaa;

  margin: 0 auto;
  width: 100%;
  ul {
    padding: 4rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 762px) {
      flex-direction: column;
      padding: 3rem;
    }
    li {
      text-decoration: none;
      list-style: none;
      transition: all 0.2s;
      @media (max-width: 762px) {
        margin-bottom: 1.2rem;
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
