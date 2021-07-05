import React from "react";

const AboutMenu = ({ headline, paragraph }) => {
  return (
    <div className="about-menu">
      <div className="container">
        <div className="headline">
          <h1 className="i0">{headline[0]}</h1>
          <h1 className="i1">{headline[1]}</h1>
          <h1 className="i2">{headline[2]}</h1>
          <h1 className="i3">{headline[3]}</h1>
          <h1 className="i4">{headline[4]}</h1>
          <h1 className="i5">{headline[5]}</h1>
          <h1 className="i6">{headline[6]}</h1>
          <h1 className="i7">{headline[7]}</h1>
          <h1 className="i8">{headline[8]}</h1>
          <h1 className="i9">{headline[9]}</h1>
          {/* <p></p> */}
        </div>
        {paragraph && (
          <p>
            check out lunch menu from <br></br>
            <a href="https://www.instagram.com/burgercompanyhki/">
              instagram
            </a>{" "}
            or <a href="https://www.facebook.com/burgercompanyhki/">facebook</a>
          </p>
        )}
        {/* <div className="img-wrapper">
          <div className="menu-image">
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AboutMenu;
