import React from "react";

import { ContactWrapper } from "./styles";
const Index = () => {
  return (
    <ContactWrapper>
      <div className=" description_container">
        <h1 className="description_header">Contact Me?</h1>
        <p className="description">
          Hi,i'm currently searching for a job,i have been coding for a year now
          and i am familar with javascript(typescript) and its framework and i
          have also worked as intern frontend developer @learnfactoryNigeria.I'm
          open for any software role or gig,you can contact me via my email @
          <a href="mailto:dennisjunior247@gmail.com">
            dennisjunior247@gmail.com
          </a>
        </p>
        <div className="link_div">
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
