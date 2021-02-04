import styled from "styled-components";


export const HomepageWrapper = styled.div`
  visibility: hidden;
  position: relative;
  height: 100vh;
  min-height: 600px;
  background: #293335;
  text-align: center;
  .description_container {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    max-width: 150rem;
    transform: translate(-50%, -50%);
    .description_header {
      font-weight: 400;
      margin-bottom: 10px;
      font-size: 4rem;
      @media (max-width: 768px) {
        font-size: 1.5rem;
        font-weight: 300;
      }
    }
    .description {
      max-width: 50rem;
      margin: 0 auto;
      font-size: 1.5rem;
      color: #fff;
      opacity: 0.7;
      line-height: 1.7;
      @media (max-width: 768px) {
        font-size: 20px;
      }
    }
  }
`;
