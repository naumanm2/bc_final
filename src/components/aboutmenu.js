import React from "react";

import { GatsbyImage } from "gatsby-plugin-image";

const AboutMenu = ({image}) => {

  return (
    <div className="about-menu">
      <div className="container">
        <div className="headline">
          <h1>lol</h1>
          <p>just below, but let us showcase the food first</p>
        </div>
        <div className="img-wrapper">
          <div className="menu-image">
            {image}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMenu;
