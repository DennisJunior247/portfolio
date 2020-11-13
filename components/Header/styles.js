import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 68px;
  position: relative;
`;

export const Nav = styled.nav`
  width: ${({ showMenu }) => (!showMenu ? "0%" : "100%")};
  height: 85vh;
  position: absolute;
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
        transition: border 5s ease-out;
        text-decoration: none;
        color: ${({ theme }) => theme.white};
        &:hover {
          border-bottom: 1px solid ${({ theme }) => theme.white};
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
      height: 85vh;
      overflow: hidden;
      opacity: 1;
    }
  }
`;

export const IconBottons = styled.div`
  .icon-closed {
    margin: 20px 0 0 20px;
    font-size: 2.5rem;
  }
`;
