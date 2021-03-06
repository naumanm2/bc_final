import React from "react";

import Header from "../components/header";
import SEO from "../components/seo";
import Logo from "../components/logo";
import Sidebar from "../components/sidebar";
import Menu from "../components/menu";
import AboutMenu from "../components/aboutmenu";
import Slogan from "../components/slogan";
import Footer from "../components/footer";

import { StaticImage } from "gatsby-plugin-image";

import '../styles/styles.scss'

const wine = () => {
  const image = <StaticImage src="../menus/menu/menu_screens3.png" alt="wine-list" />;
  return (
    <>
      <SEO title="wine list" />
      <Header />
      <Logo />
      <AboutMenu headline="wine" />
      <Menu menu={image} />
      <Sidebar active="wine" />
      <Slogan />
      <Footer />
    </>
  );
};

export default wine;
