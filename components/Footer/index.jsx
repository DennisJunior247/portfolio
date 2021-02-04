import React from "react";
import { FooterWrapper } from "./styles";
import { Git, Linkedin, Twitter } from "../../assets/index";
const Index = () => {
  return (
    <FooterWrapper>
      <ul>
        <li>
          <a href="https://github.com/DennisJunior247">
            <Git />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/dennis-junior-180957197/">
            <Linkedin />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/dennisjunior247">
            <Twitter />
          </a>
        </li>
      </ul>
    </FooterWrapper>
  );
};

export default Index;
