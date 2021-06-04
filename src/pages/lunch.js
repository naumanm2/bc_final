import React from "react";

import Header from "../components/header";
import Logo from "../components/logo";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import Menu from "../components/menu";
import AboutMenu from "../components/aboutmenu";

import { StaticImage } from "gatsby-plugin-image"

const lunch = ({ data }) => {

  const image = <StaticImage 
                  src="../images/alacarte.png"
                  alt="a la carte"
                  />

  return (
    <>
      <Header />
      <Logo />
      <AboutMenu image={image} />
      <Menu menu={image} />
      <Sidebar active="lunch" />
      <Footer />
    </>
  );
};

export default lunch;
