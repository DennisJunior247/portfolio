import React from "react";
import { FooterWrapper } from "./styles";
import { FlexibleDiv } from "../CustomFlex/flexibleDiv.styles";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";

const Index = ({ text }) => {
  return (
    <FooterWrapper>
      <FlexibleDiv
        className={"link-div"}
        justifyContent="space-around"
        width={"100%"}
      >
        <a href={"https://github.com/DennisJunior247"}>
          <AiFillGithub className="icon" />
        </a>
        <a href={"https://www.linkedin.com/in/dennis-junior"}>
          <AiFillLinkedin className="icon" />
        </a>
        <a href={"https://twitter.com/dennisjunior247"}>
          <AiOutlineTwitter className="icon" />
        </a>
      </FlexibleDiv>
    </FooterWrapper>
  );
};

export default Index;
