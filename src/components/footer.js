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
                <Link to="/lunch/">lunch</Link>
              </li>
              <li className="i2">
                <Link to="/menu/">menu</Link>
              </li>
              <li className="i3">
                <Link to="/wine/">wine</Link>
              </li>
              <li className="i4">
                <Link to="/beer/">beer</Link>
              </li>
            </ul>
          </div>
          <div className="middle-links">
            <ul className="left-opening-times">
              <li className="i1">040-7092543</li>
              <li className="i2">hernesaarenkatu 17</li>
              <li className="i3">ma-pe 11-22</li>
              <li className="i4">la-su 12-22</li>
            </ul>
            <ul className="right-media-links">
              <li className="i1">
                <a href="https://www.instagram.com/burgercompanyhki/">
                  instagram
                </a>
              </li>
              <li className="i2">
                <a href="https://www.facebook.com/burgercompanyhki/">
                  facebook
                </a>
              </li>
              <li className="i3">
                <a href="https://wolt.com/en/fin/helsinki/restaurant/helsinki-burger-co-uusi">
                  wolt
                </a>
              </li>
              <li className="i4">
                <a href="https://www.foodora.fi/en/restaurant/new/orqy/helsinki-burger-co">
                  foodora
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-logo">
          <Link to="/">
            <Logo_b />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
