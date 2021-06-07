import React from "react";

import { GatsbyImage } from "gatsby-plugin-image";

const AboutMenu = ({headline}) => {

  return (
    <div className="about-menu">
      <div className="container">
        <div className="headline">
          <h1>{headline}</h1>
          <p></p>
        </div>
        <div className="img-wrapper">
          <div className="menu-image">
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMenu;
