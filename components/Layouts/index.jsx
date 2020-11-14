import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Main } from "./styles";

const Layout = ({ childern }) => {
  console.log(childern);
  return (
    <div>
      <Header />
      <Main>{childern}</Main>
      <Footer text={"@dennisjunior@gamil.com"} />
    </div>
  );
};

export default Layout;
