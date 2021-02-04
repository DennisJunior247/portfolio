import React, { useRef } from "react";
import { gsap, Power3, TweenMax } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { WorksWrapper } from "./styles";
import Landing from "../../assets/landing.png";
import Commerce from "../../assets/eCommerce.png";
import Travel from "../../assets/travel.png";

gsap.registerPlugin(ScrollTrigger);
const Index = () => {
  const projectArray = [
    {
      projectimage: Travel,
      title: "Food Recipe App",
      discription: "This is a mini project used in finding recipes for food.",
      viewSite: "View",
    },
    {
      projectimage: Landing,
      title: "Landing Page Ui ",
      discription: "This is a mini project used in finding recipes for food.",
    },
    {
      projectimage: Commerce,
      title: "E-commerce App ",
      discription:
        "This is a mini project used in finding recipes for food,the data is from a food recipe APi.",
      viewSite: "www.google.com",
    },
  ];
  let card = useRef([]);
  card.current = [];
  let app = useRef(null);

  React.useEffect(() => {
    const h1 = app.querySelector(".description_header");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: app,
        start: "top 90%",
      },
    });

    tl.to(app, 0, { css: { visibility: "visible" } }).from(h1, 0.7, {
      opacity: 0,
      x: -40,
      y: 40,
      ease: Power3.easeIn,
    });

    card.current.forEach((card, i) => {

      TweenMax.from(card,0.7, {
        x: -40,
        opacity: 0,
        ease: Power3.easeIn,
        scrollTrigger: {
          id: `section ${i - 1}`,
          trigger: card,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      });
    });
  });

  const addRef = (el) => {
    if (el && !card.current.includes(el)) {
      card.current.push(el);
    }
  };
  return (
    <WorksWrapper ref={(e) => (app = e)}>
      <div className="row">
        <h1 className="description_header"> My Projects</h1>
        <div className="wrapper">
          {projectArray.map((item, id) => (
            <div
              ref={addRef}
              className="project_container"
              key={`${item}+${id}`}
            >
              <div className="img_container">
                <img src={item.projectimage} alt="" />
              </div>
              <div className="typo">
                <h1>{item.title}</h1>
                <p>{item.discription}</p>
                <div className="link_div">
                  <a target="_blank" href={item.viewSite}>
                    View &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </WorksWrapper>
  );
};

export default Index;
