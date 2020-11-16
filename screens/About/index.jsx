import React from "react";
import Header from "../../components/Header";
import { AboutWrapper } from "./styles";
import { HomepageWrapper } from "./styles";
import Footer from "../../components/Footer";
import Button from "../../components/Buttons";
import dennis from "../../assets/dennis6.jpg";
import { FlexibleDiv } from "../../components/CustomFlex/flexibleDiv.styles";
const Index = () => {
  return (
    <AboutWrapper>
      <Header />
      <div className={"container"}>
        <FlexibleDiv
          height={"100%"}
          className={"typo-container"}
          width={"60%"}
        >
          <div className={"header-text"}>
            <h1>ABOUT ME</h1>
          </div>
          <div className={"typography"}>
            <p>
              My name is Uzeh Dennis junior and i am a web and mobile frontend
              Devloper,background includes team collaboration and leadership
              abilites ,performance optimization, writing clean code in line
              with the companies standard, fast at learning and also fun to work
              with. <br></br>I am passionate about creating user delightful
              interfaces such as websites and mobile apps,based on the users
              need that are Also easy and simple to use. <br></br>During my free
              time i like to play video games and videography/content creating.
            </p>
          </div>
        </FlexibleDiv>
        <div className={"img-container"}></div>
      </div>
    </AboutWrapper>
  );
};

export default Index;
