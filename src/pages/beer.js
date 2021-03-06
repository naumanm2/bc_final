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

const beer = () => {
  const image = <StaticImage src="../menus/menu/menu_screens2.png" alt="beer list" />;
  return (
    <>
      <SEO title="beer list" />
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
