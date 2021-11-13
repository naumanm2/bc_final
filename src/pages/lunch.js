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

const lunch = () => {
  const image = <StaticImage src="../menus/menu/menu_27.png" alt="a la carte" />;
  return (
    <>
      <SEO title="lunch" />
      <Header />
      <Logo />
      <AboutMenu headline="lunch list" paragraph={true}/>
      {/* <Menu menu={image} /> */}
      <Sidebar active="lunch" />
      <Slogan />
      <Footer />
    </>
  );
};

export default lunch;
