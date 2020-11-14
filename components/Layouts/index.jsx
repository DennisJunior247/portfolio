import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Main } from "./styles";

const Layout = ({ childern },props) => {
  console.log(props.childern);
  return (
    <div>
      <Header />
      <Main>{childern}</Main>
      <Footer text={"@dennisjunior@gamil.com"} />
    </div>
  )
}

export default Layout;
