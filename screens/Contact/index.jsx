import React, { useRef, useEffect } from "react";
// import { gsap, Power3 } from "gsap/dist/gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { ContactWrapper } from "./styles";
// gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  // let app = useRef(null);
  // let revealText = useRef(null);
  // let btn = useRef(null);

  // useEffect(() => {
  //   const h1 = revealText.querySelector(".description_header");
  //   const p = revealText.querySelector(".description");

  //   let tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: app,
  //       start: "bottom bottom",
  //     },
  //   });
  //   tl.to(app, 0, {
  //     css: { visibility: "visible" },
  //   })
  //     .from(h1, 0.7, {
  //       opacity: 0,
  //       x: -40,
  //       y: 40,
  //       ease: Power3.easeIn,
  //     })
  //     .from(p, 0.7, {
  //       opacity: 0,
  //       ease: Power3.easeOut,
  //     })
  //     .from(btn, 0.5, {
  //       opacity: 0,
  //       y:40,
  //       ease: Power3.easeOut,
  //     });
  // });

  return (
    <ContactWrapper >
      <div  className=" description_container">
        <h1 className="description_header">Get In Touch!</h1>
        <p className="description">
          Hi,i'm currently searching for a job,i have been coding for a year now
          and i am familar with javascript/typescript and its frameworks and i
          have also worked as intern frontend developer @learnfactoryNigeria.I'm
          open for any software role or gig,you can contact me via my email@
          <a href="mailto:dennisjunior247@gmail.com">
            dennisjunior247@gmail.com
          </a>
        </p>
        <div  className="link_div">
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1ipO4D9YRltNSgZQhTTst3Z6ktUzgEBGj/view?usp=sharing"
          >
            View My Resume &rarr;
          </a>
        </div>
      </div>
    </ContactWrapper>
  );
};

export default Index;
