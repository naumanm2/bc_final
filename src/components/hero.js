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
                  <Link to="/lunch/">lunch</Link>
                </li>
                <li className="item i2">
                  <Link to="/menu/">menu</Link>
                </li>
                <li className="item i3">
                  <Link to="/wine/">wine</Link>
                </li>
                <li className="item i4">
                  <Link to="/beer/">beer</Link>
                </li>
              </div>
            </ul>
          </div>
          <div className="lower-main">
            <div className="lcol col-1">
              <ul className="opening-times">
                <li className="i2">hotline: <br></br>040-7092543</li>
                <li className="i3">hernesaarenkatu 17</li>
                <li className="i4">ma-pe 11-22</li>
                <li className="i5">la-su 12-22</li>
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
