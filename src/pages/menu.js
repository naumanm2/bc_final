import React from "react";

import SEO from "../components/seo";
import Header from "../components/header";
import Logo from "../components/logo";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import Menu from "../components/menu";
import AboutMenu from "../components/aboutmenu";
import Slogan from "../components/slogan";
import { StaticImage } from "gatsby-plugin-image";

import '../styles/styles.scss'

const alacarte = () => {
  const image = (
    <StaticImage src="../menus/menu/menu_screens.png" alt="à la carte" />
  );
  const image2 = (
    <StaticImage src="../menus/menu/menu_screens4.png" alt="à la carte" />
  );
  return (
    <>
      <SEO title="menu" />
      <Header />
      <Logo />
      <AboutMenu headline="menu" />
      <Menu menu={image} />
      <Menu menu={image2} />
      <Sidebar active="menu" />
      <Slogan />
      <Footer />
    </>
  );
};

export default alacarte;
