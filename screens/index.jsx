import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Landing from "./Landing";
import About from "./About";
import Works from "./Works";
import Contact from "./Contact";


const Index = () => {
  return (
    <div>
      <Header />
      <Landing />
      <About/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Index;
