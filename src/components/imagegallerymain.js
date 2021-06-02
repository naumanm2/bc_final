import React from "react";

import { StaticImage } from "gatsby-plugin-image";

const ImageGalleryMain = () => {
  return (
    <>
      <div className="img-gallery-main">
        <div className="container">
          <div className="img-container">
            <div className="gridcontainer">
              <div className="griditem item1">
                <StaticImage src="image1" alt="image1" />
              </div>
              <div className="griditem item2">
                <StaticImage src="image2" alt="image2" />
              </div>
              <div className="griditem item3">
                <StaticImage src="image3" alt="image3" />
              </div>
              <div className="griditem item4">
                <StaticImage src="image4" alt="image4" />
              </div>
              <div className="griditem item5">
                <StaticImage src="image5" alt="image5" />
              </div>
              <div className="griditem item6">
                <StaticImage src="image6" alt="image6" />
              </div>
              <div className="griditem item7">
                <StaticImage src="image7" alt="image7" />
              </div>
              <div className="griditem item8">
                <StaticImage src="image8" alt="image8" />
              </div>
              <div className="griditem item9">
                <StaticImage src="image9" alt="image9" />
              </div>
              <div className="griditem item10">
                <StaticImage src="image10" alt="image10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageGalleryMain;
