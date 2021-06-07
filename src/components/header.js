import React from "react";

import { Link } from "gatsby";
import Logo from "../icons/SVG/logo_pink.svg";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-header">
            <Link to="/">
              <Logo className="logo"/>
            </Link>
          <div className="nav-menu">
            <div className="upper-nav">
                rather stay in?
            </div>
            <nav>
              <div className="lower-nav">
                <a href="https://wolt.com/fi/fin/helsinki/restaurant/helsinki-burger-co-uusi">
                  wolt
                </a>
                <Link to="/lunch">
                  foodora
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
