import React from "react";
import Header from "../../components/Header";
import { AboutWrapper } from "./styled";
import { FlexibleDiv } from "../../components/CustomFlex/flexibleDiv.styles";
const Index = () => {
  return (
    <AboutWrapper>
      <div className=" description_container">
        <h1 className="description_header">More About Me?</h1>
        <p className="description">
          I am a web and mobile frontend Devloper,background includes team
          collaboration and leadership abilites ,performance optimization,
          writing clean code in line with the companies standard, fast at
          learning and also fun to work with.
          <br />
          <br />
          I am passionate about creating user delightful interfaces such as
          websites and mobile apps,based on the users need that are Also easy
          and simple to use.
          <br />
          <br />
          I have been coding for a year+ and within these months of coding and
          solving problems, i've worked on projects both sol and collaborated.I
          currently intern @LearnFactoryNigeria,i am open to both physical and
          remote work.
          <br />
          <br />
          Outside work i'm a fun loving person. i love playing music🎶, video
          games, photography and meeting new people😋.
        </p>
      </div>
    </AboutWrapper>
  );
};

export default Index;
