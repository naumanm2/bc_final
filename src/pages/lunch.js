import React from "react";

import Header from "../components/header";
import Logo from "../components/logo";
import Sidebar from "../components/sidebar";
import Menu from "../components/menu";
import AboutMenu from "../components/aboutmenu";
import Slogan from "../components/slogan";
import Footer from "../components/footer";

import { StaticImage } from "gatsby-plugin-image";

const lunch = () => {
  const image = <StaticImage src="../menus/menu/menu_screens5.png" alt="a la carte" />;
  return (
    <>
      <Header />
      <Logo />
      <AboutMenu headline="lunch list" />
      <Menu menu={image} />
      <Sidebar active="lunch" />
      <Slogan />
      <Footer />
    </>
  );
};

export default lunch;
