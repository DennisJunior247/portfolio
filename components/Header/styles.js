import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1000;
  background: ${({ theme }) => theme.dark};
  display: ${({ showMenu }) => (showMenu ? "block" : "none")};
  animation: ${({ showMenu }) =>
    showMenu === true
      ? "rollDown 1s ease-in forwards"
      : "rollUp 1s ease-in forwards"};

  .header-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    li {
      display: flex;
      font-size: 1.5rem;
      list-style: none;
      align-items: stretch;
      justify-content: stretch;

      a {
        padding: 1rem;
        cursor: pointer;
        font-weight: 400;
        width: max-content;
        transition: border 2s ease-in;
        text-decoration: none;
        color: ${({ theme }) => theme.white};
        &:hover {
          transform: scale(1.5);
        }
      }
    }
    .isActive {
      a {
        color: ${({ theme }) => theme.green};
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
      height: 100%;
      overflow: hidden;
      opacity: 1;
    }
  }
`;

export const IconBottons = styled.div`
  position: fixed;
  z-index: 3000;
  width: 100px;
  .icon-closed {
    margin: 20px 0 0 50px;
    font-size: 2.5rem;
    cursor: pointer;
    z-index: 1000;
  }
`;
