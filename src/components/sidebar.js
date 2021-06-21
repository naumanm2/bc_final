import React from "react";

import { Link } from "gatsby";

const Sidebar = ({ active }) => {
  return (
    <div>
      <div className="nav-right">
        <ul className="nav-links">
          <li className={"i1 lunch" + (active === "lunch" ? " active" : "")}>
            <Link to="/lunch">lunch</Link>
          </li>
          <li className={"i2 alacarte " + ( active  === "alacarte" ? "active" : "")}>
            <Link to="/alacarte">à la carte</Link>
          </li>
          <li className={"i3 wine " + ( active  === "wine" ? "active" : "")}>
            <Link to="/wine">wine</Link>
          </li>
          <li className={"i4 beer " + ( active  === "beer" ? "active" : "")}>
            <Link to="/beer">beer</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
