import { keyframes } from "styled-components";
import styled from "styled-components";

export const HomepageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.dark};
  .container {
    height: 90%;
    width: 100%;
    display: flex;
    .hero-text {
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
            animation: nameAmin 5s linear 1s infinite;
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
            line-height: 1.5;
          }
        }
      }
      @media (max-width: 600px) {
        width: 100%;
      }
    }
    .sideHero-text {
      width: 50%;
      position: relative;
      div {
        right: 50px;
        top: 1px;
        overflow: hidden;
        bottom: 10px;
        transform: rotateX(360deg);
        position: absolute;
        @media (max-width: 950px) {
          right: 10px;
        }
        @media (max-width: 800px) {
          right: 10px;
          width: 800px;
          height: 600;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }

      /* border: 1px solid red; */
      @media (max-width: 600px) {
        display: none;
      }
    }
  }
  @keyframes nameAmin {
    0% {
      color: rgb(255, 173, 31);
    }
    50% {
      color: rgb(29, 161, 242);
    }
    80% {
      color: #ffff;
    }
    100% {
      color: rgb(244, 93, 34);
    }
  }
`;
