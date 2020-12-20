import React from "react";
import Link from "next/link";
import Header from "../../components/Header";
import { HomepageWrapper } from "./styles";
import { FlexibleDiv } from "../../components/CustomFlex/flexibleDiv.styles";
const Index = () => {
  return (
    <HomepageWrapper>
      <div className=" description_container">
        <h1 className="description_header">Hi,i'm Dennis Junior</h1>
        <p className="description">
          I'm a web and mobile frontend developer.I am passionate about creating
          user delightful interfaces such as websites and mobile apps,based on
          the users need that are Also easy and simple to use.
        </p>
      </div>
    </HomepageWrapper>
  );
};

export default Index;
