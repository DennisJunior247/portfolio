import React from "react";
import { WorksWrapper } from "./styles";
import Pic from "../../assets/bgPic1.jpg";
import Landing from "../../assets/landing.png";
import Commerce from "../../assets/eCommerce.png";
import Travel from "../../assets/travel.png";
const Index = () => {
  const projectArray = [
    {
      projectimage: Travel,
      title: "Food Recipe App",
      discription:
        "This is a mini project used in finding recipes for food, the data is from a food recipe APi,javascript,react and styled-components.",
      viewSite: "View",
    },
    {
      projectimage: Landing,
      title: "Landing Page Ui ",
      discription:
        "This is a mini project used in finding recipes for food, the data is from a food recipe APi,javascript,react and styled-components.",
    },
    {
      projectimage: Commerce,
      title: "E-commerce App ",
      discription:
        "This is a mini project used in finding recipes for food, the data is from a food recipe APi,javascript,react and styled-components.",
      viewSite: "www.google.com",
    },
  ];
  console.log(projectArray);

  return (
    <WorksWrapper>
      <div className="row">
        <h1 className="description_header"> My Projects</h1>
        {projectArray.map((item, id) => (
          <div className="project_container" key={`${item}+${id}`}>
            <div className="img_container">
              <img src={item.projectimage} alt=""  />
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
    </WorksWrapper>
  );
};

export default Index;
