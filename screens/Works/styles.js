import styled from "styled-components";

export const WorksWrapper = styled.div`
  width: 100%;
  background: #293335;
  display: flex;
  justify-content: center;
  align-items: center;

  .description_header {
    padding: 2.5rem 0;
    font-weight: 300;
    margin-bottom: 40px;
    color: #fff;
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
    background-color: #fff;
  }

  .row {
    width: 80%;
    .project_container {
      background: #fff;
      box-shadow: 0 0.2rem 0.2rem rgba(0, 0, 0, 0.1);
      border-radius: 3px;
      display: flex;
      padding: 1.5rem;
      margin: 3rem auto;
      @media (max-width: 768px) {
        flex-direction: column;
      }
      .img_container {
        flex-basis: 30%;
        img {
          width: 100%;
          max-width: 300px;
          min-height: 180px;
          height: auto;
        }
      }
      .typo {
        flex-basis: 70%;
        padding: 0 2rem;
        @media (max-width: 768px) {
          padding: 0;
        }
        h1 {
          font-weight: 300;
          margin-bottom: 20px;
          color: #555;
          font-size: 1.8rem;
          text-align: center;
          @media (max-width: 768px) {
            font-size: 1.5rem;
            font-weight: 300;
            margin-top: 20px;
            text-align: left;
          }
        }
        p {
          text-align: left;
          font-size: 0.9rem;
          line-height: 2;
          color: #555555;
          @media (max-width: 768px) {
            font-size: 13px;
          }
        }
        .link_div {
          width: 10rem;
          margin-top: 5rem;
          transition: all 0.2s;
          &:hover {
            transform: scale(1.2);
            @media (max-width: 768px) {
              margin-top: 3rem;
            }
          }
          a {
            border-radius: 14rem;
            padding: 10px 2rem;
            border: 1px solid #fff;
            box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.17);
            text-decoration: none;
            opacity: 0.7;
            color: #293335;
            text-align: center;
            cursor: pointer;
          }
        }
      }
    }
  }
`;
