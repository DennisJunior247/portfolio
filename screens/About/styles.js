import styled from "styled-components";
import dennis from "../../assets/dennis2.jpg";
export const AboutWrapper = styled.div`
  width: 100%;
  /* border: 1px solid red; */

  background: ${({ theme }) => theme.dark};
  .container {
    min-height: 89.9vh;
    width: 100%;
    display: flex;
    .typo-container {
      padding-top: 5rem;
      margin-top: 40px;
      @media (max-width: 700px) {
        width: 100%;
        padding-top: 3rem;
        margin-top: 20px;
      }
    }
    /* border: 2px solid pink; */
    .header-text {
      margin-bottom: 40px;
      @media (max-width: 700px) {
        margin-bottom: 20px;
      }
      /* border: 2px solid blue; */
      h1 {
        text-align: center;
        text-transform: uppercase;
        padding: 20px;
      }
    }

    .typography {
      /* border: 2px solid blue; */
      padding: 30px;
      /* padding: 0rem 3rem 3rem 3rem; */
      @media (max-width: 700px) {
        padding: 15px;
      }
      display: flex;
      flex-wrap: word-wrap;
      p {
        line-height: 1.5rem;
        text-transform: capitalize;
      }
    }
  }
  .img-container {
    height: 550px;
    width: 500px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url(${dennis});
    background-size: cover;
    /* img {
      width: 100%;
      height: 100%;
    } */

    @media (max-width: 700px) {
      display: none;
    }
  }
`;
