import React from "react";

import { GatsbyImage } from "gatsby-plugin-image";

const AboutMenu = ({headline}) => {

  

  return (
    <div className="about-menu">
      <div className="container">
        <div className="headline">
          <h1 className="i0">{headline[0]}</h1>
          <h1 className="i1">{headline[1]}</h1>
          <h1 className="i2">{headline[2]}</h1>
          <h1 className="i3">{headline[3]}</h1>
          <h1 className="i4">{headline[4]}</h1>
          <h1 className="i5">{headline[5]}</h1>
          <h1 className="i6">{headline[6]}</h1>
          <h1 className="i7">{headline[7]}</h1>
          <h1 className="i8">{headline[8]}</h1>
          <h1 className="i9">{headline[9]}</h1>
          {/* <p></p> */}
        </div>
        {/* <div className="img-wrapper">
          <div className="menu-image">
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AboutMenu;
