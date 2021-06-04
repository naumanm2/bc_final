import React from "react";

import Logo_b from "../icons/SVG/balls_pink_1.svg";
import { Link } from 'gatsby'


const Logo = () => {
  return (
    <div>
      <div className="lcol col-3">
        <div className="logo-right_bot">
          <Link to="/"><Logo_b /></Link>
        </div>
      </div>
    </div>
  );
};

export default Logo;
