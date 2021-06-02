import React from "react";

import Logo_b from "../icons/SVG/balls_pink_1.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="wrapper">
          <div className="links">
            <ul className="lower-links">
              <li className="i1">lunch</li>
              <li className="i2">menu</li>
              <li className="i3">beer</li>
              <li className="i4">wine</li>
            </ul>
          </div>
          <div className="middle-links">
            <ul className="left-opening-times">
              <li className="i1">hernesaarenkatu 17</li>
              <li className="i2">ma-to 11-20</li>
              <li className="i3">pe-la 12-20</li>
              <li className="i4">su 12-20</li>
            </ul>
            <ul className="right-media-links">
              <li className="i1">instagram</li>
              <li className="i2">facebook</li>
              <li className="i3">wolt</li>
              <li className="i4">foodora</li>
            </ul>
          </div>
        </div>
        <div className="footer-logo">
            <Logo_b />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
