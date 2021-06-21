import React from "react";

import { Link } from "gatsby";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
          <div className="main-list">
            <ul className="list">
              <div className="main-list-items">
                <li className="item i1">
                  <Link to="/lunch">lunch</Link>
                </li>
                <li className="item i2">
                  <Link to="/alacarte">à la carte</Link>
                </li>
                <li className="item i3">
                  <Link to="/wine">wine</Link>
                </li>
                <li className="item i4">
                  <Link to="/beer">beer</Link>
                </li>
              </div>
            </ul>
          </div>
          <div className="lower-main">
            <div className="lcol col-1">
              <ul className="opening-times">
                <li className="i2">takeaway: <br></br>040-7092543</li>
                <li className="i3">hernesaarenkatu 17</li>
                <li className="i4">ma-to 11-20</li>
                <li className="i5">pe-la 12-20</li>
                <li className="i6">su 12-20</li>
              </ul>
            </div>
            <div className="lcol col-2">
              <div className="see_more">
                <div className="row-1">pictures and stuff below</div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
