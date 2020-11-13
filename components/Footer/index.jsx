import React from "react";
import { FooterWrapper } from "./styles";
import { FlexibleDiv } from "../CustomFlex/flexibleDiv.styles";
const Index = ({ text }) => {
  return (
    <FooterWrapper>
      <FlexibleDiv background={"transparent"} justifyContent={"space-between"}>
        <span>{text}</span>
        <FlexibleDiv justifyContent="space-around" width={"50%"}>
          <a href={"https://github.com/DennisJunior247"}>Github</a>
          <a href={"https://www.linkedin.com/in/dennis-junior"}>Linkedin</a>
          <a href={"https://twitter.com/dennisjunior247"}>Twitter</a>
        </FlexibleDiv>
      </FlexibleDiv>
    </FooterWrapper>
  );
};

export default Index;
