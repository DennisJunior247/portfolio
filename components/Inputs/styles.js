import styled from "styled-components";

export const InputWrapper = styled.div`
  label {
    font-weight: 500;
    color: green;
    font-size: 1rem;
  }
  .input {
    width: 100%;
    height: 100%;
    padding: 5px;
    outline: none;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.white};
    background-color: transparent;
    color: ${({ theme }) => theme.white};
    font-size: 18px;
  }
  .input:active {
    background-color: transparent;
  }
  .field {
    width: 25rem;
    height: 50px;
    border: none;
    background-color: transparent;
    transition: 0.3s all ease-in-out;
  }
  .field.active input {
    outline: none;
    padding: 24px 16px 8px 16px;
  }
`;
export const TextAreaWraaper = styled.div`
  .text-area {
    outline: none;
    background: transparent;
    padding: 5px;
    overflow: auto;
    color: ${({ theme }) => theme.white};
    /* resize:none; */
  }
`;
