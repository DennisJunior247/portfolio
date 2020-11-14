import styled from "styled-components";

export const Button = styled.button`
  outline: none;
  border: none;
  display: flex;
  cursor: pointer;
  font-size: 14px;
  align-items: center;
  border-radius: 10rem;
  padding: 0.8rem 3rem;
  justify-content: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.dark};
  background: ${({ theme }) => theme.green};
  &:hover {
    transition: all 0.3s ease-in;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.white};
    background: ${({ theme }) => theme.dark};
    color: ${({ theme }) => theme.white};
  }
`;
