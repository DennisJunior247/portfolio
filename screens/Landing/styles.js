import styled from "styled-components";

export const HomepageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.dark};

  .container {
    height: 90%;
    width: 100%;
    display: flex;

    .hero-text-box {
      width: 50%;
      .hero-text-container {
        .footer {
          position: relative;
          z-index: 1;
          margin-top: 70px;
        }
        padding: 0 0 0 30px;
        .href {
          position: relative;
          z-index: 1;
          padding: 14px 50px;
          cursor: pointer;
          text-decoration: none;
          background: ${({ theme }) => theme.dark};
          border: 1px solid ${({ theme }) => theme.white};
          color: ${({ theme }) => theme.white};
        }
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
            font-weight: 600;
            @media (max-width: 400px) {
              font-size: 30px;
            }
          }
        }
        div:nth-child(3) {
          text-transform: capitalize;
          margin-bottom: -3px;
          color: ${({ theme }) => theme.green};
          p {
            font-size: 12px;
          }
        }
        div:nth-child(4) {
          margin-top: 5px;
          width: 90%;
          color: ${({ theme }) => theme.white};
          p {
            font-size: 14px;
            /* text-align: justify; */
            line-height: 1.5;
          }
        }
        @media (max-width: 600px) {
         border:1px solid red;
         margin:0px;
         padding:0px;
        }
      }
      @media (max-width: 600px) {
        width: 100%;
      }
    }
    .sideHero-text {
      width: 50%;
      position: relative;
      .img-container {
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
          width: 900px;
          height: 600;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      @media (max-width: 600px) {
        display: none;
      }
    }
  }
`;
