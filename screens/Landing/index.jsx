import React from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { HomepageWrapper } from "./styles";
import { FlexibleDiv } from "../../components/CustomFlex/flexibleDiv.styles";
import home from "../../assets/home-bg.svg";

const Index = () => {
  return (
    <HomepageWrapper>
      <Header />
      <div className={"container"}>
        <FlexibleDiv
          justifyContent="flex-start"
          className={"hero-text-box"}
          width="50%"
        >
          <div className={"hero-text-container"}>
            <p>Hello world 👋 I'M</p>
            <h1>Dennis Junior</h1>
            <p> web+mobile devloper 👨‍💻</p>
            <p>
              I'm a web and mobile frontend developer.I am passionate about
              creating user delightful interfaces such as websites and mobile
              apps,based on the users need that are Also easy and simple to
              use,based in Aba Abia state /Remote
            </p>
          </div>
        </FlexibleDiv>
        <FlexibleDiv className={"sideHero-text"} width={"50%"}>
          <div className={"img-container"}>
            <img src={home} alt="" />
          </div>
        </FlexibleDiv>
      </div>
    </HomepageWrapper>
  );
};

export default Index;
