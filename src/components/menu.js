import React from "react";


const Menu = ({ menu }) => {

  return (
    <div className="menu-container">
      <div className="container">
        <div className="wrapper">
          <div className="inner-menu">
            {menu}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
