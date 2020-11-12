import styled from "styled-components";

const InputWrapper = styled.div`
  label {
    font-weight: 500;
    color: #828282;
    font-size: 1rem;
  }
  .input{
    width : 100%;
    height : 100%;
    outline: none;
  }
  .input:active{
    background-color: #ffffff;
  }
  .field {
   
    width: 100%;
    height: 50px;
    border-radius: 50px;
    position: relative;
    background-color:#f6eff7f0;
    transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out;
  }

  .field:hover {
    background-color: #f9f9f9;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.12);

  .field.active {
    background-color: #ffffff;
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.2);
  }

  .field.active input {
    outline: none;
    padding: 24px 16px 8px 16px;
  }

  /* .field.active input + label {
    top: 2px;
    opacity: 0.8;
    color: #4e1980;
  }
  } */
`;

export { InputWrapper };
