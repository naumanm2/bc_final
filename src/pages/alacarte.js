import React from "react";

import Header from "../components/header";
import Logo from "../components/logo";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import Menu from "../components/menu";
import AboutMenu from "../components/aboutmenu";
import Slogan from "../components/slogan";
import { StaticImage } from "gatsby-plugin-image";

const alacarte = () => {
  const image = <StaticImage src="../menus/menu-screens_offwhite.png" alt="à la carte" />;
  return (
    <>
      <Header />
      <Logo />
      <AboutMenu headline="à la carte" />
      <Menu menu={image} />
      <Sidebar active="alacarte" />
      <Slogan />
      <Footer />
    </>
  );
};

export default alacarte;
