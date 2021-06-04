import React from "react";

import Header from '../components/header'
import Logo from '../components/logo'
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'

const wine = () => {
  return (
    <>
      <Header />
      <Logo />
      <Sidebar active="wine" />
      <Footer />
    </>
  );
};

export default wine;
