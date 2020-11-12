import styled from "styled-components";

export const FlexibleDiv = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
  flex-wrap: ${(props) => props.flexWrap || "wrap"};
  flex-direction: ${(props) => props.flexDir || "row"};
  width: ${({ width }) => width || "100%"};
  height: ${({ width }) => width || "auto"};
  background: ${(bgColor) => bgColor || "red"};
`;