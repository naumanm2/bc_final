import React from "react";

import Header from "../components/header";
import Logo from "../components/logo";
import Sidebar from "../components/sidebar";
import Menu from "../components/menu";
import AboutMenu from "../components/aboutmenu";
import Slogan from "../components/slogan";
import Footer from "../components/footer";
import { StaticImage } from "gatsby-plugin-image";

const beer = () => {
  const image = <StaticImage src="../images/beer_menu.png" alt="beer list" />;
  return (
    <>
      <Header />
      <Logo />
      <AboutMenu headline="beer" />
      <Menu menu={image} />
      <Sidebar active="beer" />
      <Slogan />
      <Footer />
    </>
  );
};

export default beer;
