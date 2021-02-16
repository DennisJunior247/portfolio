import styled from "styled-components";

export const ContactWrapper = styled.div`
  /* visibility: hidden; */
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
      font-size: 2rem;
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
      width: 6.5rem;
      background-color: #777;
    }
    .description {
      font-size: 1rem;
      line-height: 1.8;
      color: #555555;
      a {
        color: #555555;
        font-style: italic;
        font-size: 18px;
        cursor: pointer;
        @media (max-width: 768px) {
          font-size: 14px;
        }
      }
      @media (max-width: 768px) {
        font-size: 18px;
      }
    }
    @media (max-width: 768px) {
      width: 85%;
    }
    .link_div {
      margin-top: 5rem;
      transition: all 0.1s;
      &:hover {
        transform: scale(1.1);
      }
      @media (max-width: 768px) {
        margin-top: 3rem;
      }
      a {
        border-radius: 14rem;
        padding: 20px 2rem;
        border: 1px solid #293335;
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3);
        text-decoration: none;
        text-align: center;
        color: #fff;
        background-color: #293335;
        cursor: pointer;
      }
    }
  }
`;
