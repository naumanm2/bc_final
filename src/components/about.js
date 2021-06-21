import React from "react";

import { StaticImage } from "gatsby-plugin-image";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="main-image">
          <StaticImage src="../images/front.jpg" alt="main-image" />
        </div>
        <div className="aboutuscontainer">
          <p>
            we opened the business late 2020 after our cloud kitchen in
            Tyynenemerenkatu proved very successful. we still operate on wolt as
            well as foodora but now we also distribute our goods in a physical
            location. in Hernesaari. come enjoy.
          </p>
          <p>
            we’re located a stone throw away from Eiranranta. come after a dip
            (but pls not too much drip), come without one, come alone, come with
            company, come however the hell you want. eat, wine, enjoy. Burger.
            Company.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
