import React from "react";
// import Link from "next/link";
import Header from "../components/Header";
import Landing from "./Landing";
import About from "./About";

const Index = () => {
  return (
    <div>
      <Header />
      <Landing />
      <About/>
    </div>
  );
};

export default Index;
