import React, { useRef, useEffect } from "react";
import { gsap, Power3 } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { AboutWrapper } from "./styled";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  let app = useRef(null);
  let revealText = useRef(null);

  useEffect(() => {
    const h1 = revealText.querySelector(".description_header");
    const p = revealText.querySelector(".description");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: revealText,
        start: "top 90%",
      },
    });
    tl.to(app, 0, {
      css: { visibility: "visible" },
    })
      .from(h1, 0.8, {
        opacity: 0,
        x: -40,
        y: 40,
        ease: Power3.easeIn,
      })
      .from(p, 0.8, {
        opacity: 0,
        x: -40,
        y: 40,
        ease: Power3.easeOut,
      });
  });

  return (
    <AboutWrapper ref={(e) => (app = e)}>
      <div ref={(e) => (revealText = e)} className=" description_container">
        <h1 className="description_header">More About Me?</h1>
        <p className="description">
          I'm Dennis, frontend javascript/typescript devloper,background
          includes team collaboration and leadership abilites ,performance
          optimization, writing clean code in line with the companies standard,
          fast at learning and also fun to work with.
          <br />
          <br />
          I am passionate about creating user delightful interfaces such as
          websites and mobile apps,based on the users need that are Also easy
          and simple to use.
          <br />
          <br />
          I have been coding for a year+ and within these months of coding and
          solving problems, i've worked on projects both sol and collaborated.I
          currently intern @LearnFactoryNigeria and open to both physical and
          remote offers.
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
