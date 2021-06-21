import React from "react";

import { Link } from "gatsby";
import Logo from "../icons/SVG/logo_pink.svg";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-header">
          <Link to="/">
            <Logo className="logo" />
          </Link>
          <div className="nav-menu">
            <div className="upper-nav">rather stay in?</div>
            <nav className="nav-links">
              <ul>
                <li className="i1">
                  <a href="https://wolt.com/fi/fin/helsinki/restaurant/helsinki-burger-co-uusi">
                    wolt
                  </a>
                </li>
                <li className="i2">
                  <a href="https://www.foodora.fi/en/restaurant/new/orqy/helsinki-burger-co">
                    foodora
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
