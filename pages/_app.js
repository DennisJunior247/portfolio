import App from "next/app";
import { ThemeProvider } from "styled-components";
import {darktheme} from "../config/themes";
import {GlobalStyles}from "../config/global"
export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={darktheme}>
        <GlobalStyles/>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
