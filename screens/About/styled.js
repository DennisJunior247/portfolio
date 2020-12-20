import styled from "styled-components";

export const AboutWrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  .description_container {
    padding: 4rem 0;
    text-align: center;
    width: 65%;
    .description_header {
      font-weight: 300;
      margin-bottom: 40px;
      color: #293335;
      font-size: 2.5rem;
      text-align: center;
      @media (max-width: 768px) {
        font-size: 1.5rem;
        font-weight: 300;
      }
    }
    .description_header:after {
      content: "";
      display: block;
      margin: 2rem auto;
      height: 2px;
      width: 6rem;
      background-color: #777;
    }
    .description {
      text-align: center;
      font-size: 1rem;
      line-height: 1.8;
      color: #555555;
      @media (max-width: 768px) {
        font-size: 18px;
      }
    }
    @media (max-width: 768px) {
      width: 85%;
    }
  }
`;
