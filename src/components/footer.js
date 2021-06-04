import React from "react";

import { Link } from "gatsby";

import Logo_b from "../icons/SVG/balls_pink_1.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="wrapper">
          <div className="links">
            <ul className="lower-links">
              <li className="i1">
                <Link to="/lunch">lunch</Link>
              </li>
              <li className="i2">
                <Link to="/alacarte">à la carte</Link>
              </li>
              <li className="i3">
                <Link to="/wine">wine</Link>
              </li>
              <li className="i4">
                <Link to="/beer">beer</Link>
              </li>
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
              <li className="i1">
                <a href="https://www.instagram.com/burgercompanyhki/">instagram</a>
              </li>
              <li className="i2">
              <a href="https://www.facebook.com/helsinkiburgerco/">facebook</a>
              </li>
              <li className="i3">
                <a href="https://wolt.com/en/fin/helsinki/restaurant/helsinki-burger-co-uusi">wolt</a>
              </li>
              <li className="i4">
                <a href="https://www.foodora.fi/en/restaurant/new/orqy/helsinki-burger-co">foodora</a>
              </li>
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
