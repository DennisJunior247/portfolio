import styled from "styled-components";

export const Button = styled.button`
  width: ${({ width }) => width || "10rem"};
  padding: 10px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: 1px solid ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
`;
