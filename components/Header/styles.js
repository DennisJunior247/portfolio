import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 10%;
  position: relative;
  background: ${({ theme }) => theme.dark};
`;

export const Nav = styled.nav`
  width: ${({ showMenu }) => (!showMenu ? "0%" : "100%")};
  height: 88vh;
  position: absolute;
  z-index:1000;
  background: ${({ theme }) => theme.dark};
  display: ${({ showMenu }) => (showMenu ? "block" : "none")};
  animation: ${({ showMenu }) =>
    showMenu
      ? "rollDown 1s ease-in forwards"
      : " 1s  ease-out forwards rollUp"};

  .header-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    li {
      display: flex;
      font-size: 1rem;

      list-style: none;
      align-items: stretch;
      justify-content: stretch;
      color: ${({ theme }) => theme.white};

      a {
        padding: 1rem;
        cursor: pointer;
        font-weight: 400;
        width: max-content;
        transition: border 2s ease-in;
        text-decoration: none;
        color: ${({ theme }) => theme.green};
        &:hover {
          /* border-bottom: 1px solid ${({ theme }) => theme.white}; */
          transform:scale(1.5)
        }
      }
    }
    .isActive {
      a {
        color: ${({ theme }) => theme.gray};
      }
    }
  }

  @keyframes rollDown {
    0% {
      height: 0;
      overflow: hidden;
      padding: 0px 0;
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      padding: 20px 0;
      height: 88vh;
      overflow: hidden;
      opacity: 1;
    }
  }
`;

export const IconBottons = styled.div`
  .icon-closed {
    margin: 20px 0 0 30px;
    font-size: 2.5rem;
  }
`;
