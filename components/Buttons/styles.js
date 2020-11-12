import styled from "styled-components";

export const Button = styled.button`
  font-family: 'DM Sans', 'Roboto',sans-serif;
  width: ${({ width }) => width || "60%"};
  padding : 10px 0 10px 10px;
  display : flex;
  justify-content : center;
  outline : none;
  border : none;
  position : ${({ position }) => position || ""};
  right : 2.5rem;
  top : 1.5rem;
  background : ${props => props.dark ? "#6d1ac5f0" : "#fffffff0"};
  font-size : 16px;
  border-radius: 20px;
  font-weight : 300;
  margin : 20px;
  color : ${props => props.dark ? " #fff" : "#6d1ac5f0"};
  box-shadow :${props => props.dark ? "none" : "0 .2rem  .1rem 0 #ddd"};
  transition : background .5s ease-out;
  cursor : pointer;

  &:hover{
    background : ${props => props.dark ? "#5c076191" : "#dad6d6f0"};
    box-shadow : none;
  }

`;
