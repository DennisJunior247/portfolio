import React from "react";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import { HomepageWrapper } from "./styles";
import Button from "../../components/Buttons";
import { FlexibleDiv } from "../../components/CustomFlex/flexibleDiv.styles";
import home from "../../assets/home-bg.svg";

const Index = () => {
  const router = useRouter();

  return (
    <HomepageWrapper>
      <Header />
      <div className={"container"}>
        <FlexibleDiv
          justifyContent="flex-start"
          className={"hero-text"}
          width="50%"
        >
          <div className={"hero-text-container"}>
            <div data-aos="fade">
              <p>Hello world 👋 I'M</p>
            </div>
            <div className={"Logo"}>
              <h1>DennisJunior</h1>
            </div>
            <div>
              <p> software devloper 👨‍💻</p>
            </div>
            <div>
              <p>
                I'm a web and mobile frontend developer <br></br>based in Aba
                Abia state /Remote
              </p>
            </div>
            <Button text={"contact me"} click={() => router.push("/contact")} />
          </div>
        </FlexibleDiv>
        <FlexibleDiv className={"sideHero-text"} width={"50%"}>
          <div>
            <img src={home} alt="" />
          </div>
        </FlexibleDiv>
      </div>
      {/* <Footer text={"@dennisjunior247@gmail.com"} /> */}
    </HomepageWrapper>
  );
};

export default Index;