import React, { useRef, useEffect } from "react";
import { TweenMax, Power3, TimelineMax } from "gsap";
import { HomepageWrapper } from "./styles";

const Index = () => {
  const tl = new TimelineMax();
  let app = useRef(null);
  let text = useRef(null);
  console.log(text);

  useEffect(() => {
    const h1 = text.querySelector(".description_header");
    const p = text.querySelector(".description");


    TweenMax.to(app, 0, { css: { visibility: "visible" } });

    tl.from(h1, 1, {
      opacity: 0,
      ease: Power3.easeIn,
    }).from(p, 1, { opacity: 0, ease: Power3.easeInOut },);
  });

  return (
    <HomepageWrapper ref={(e) => (app = e)}>
      <div ref={(e) => (text = e)} className=" description_container">
        <h1 className="description_header">Hi,i'm Dennis Junior</h1>
        <p className="description">
          I'm a web and mobile frontend developer.I am passionate
          about creating user delightful interfaces such as websites and mobile
          apps,based on the users need that are also easy and simple to use.
        </p>
      </div>
    </HomepageWrapper>
  );
};

export default Index;
