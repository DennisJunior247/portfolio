import { keyframes } from "styled-components";
import styled from "styled-components";

export const HomepageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.dark};
  .container {
    height: 80%;
    width: 100%;
    display: flex;
    .hero-text {
      border: 1px solid blue;
      width: 50%;
      .hero-text-container {
        padding: 0 0 0 30px;
        div {
          margin-bottom: 20px;
          padding-bottom: 10px;
          display: flex;
          flex-wrap: wrap;
        }
        div:nth-child(1) {
          text-transform: uppercase;
          p {
            font-size: 12px;
          }
        }
        div:nth-child(2) {
          text-transform: uppercase;
          h1 {
            font-style: italic;
            animation: nameAmin 4s linear forwards infinite;
            /* font-weight:300; */
            @media (max-width: 400px) {
              font-size: 20px;
            }
          }
        }
        div:nth-child(3) {
          text-transform: uppercase;
          margin-bottom: -3px;
          color: ${({ theme }) => theme.green};
          p {
            font-size: 12px;
          }
        }
        div:nth-child(4) {
          text-transform: uppercase;
          margin-top: 5px;
          color: ${({ theme }) => theme.gray};
          p {
            font-size: 13px;
          }
        }
      }
      @media (max-width: 600px) {
        width: 100%;
        /* justify-content:center; */
      }
    }

    .sideHero-text {
      width: 50%;
      border: 1px solid red;
      @media (max-width: 600px) {
        display: none;
      }
    }
  }
  @keyframes nameAmin {
    0% {
      color: red;
    }
    50% {
      color: blue;
    }
    100% {
      color: green;
    }
  }
`;
