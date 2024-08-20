import React from "react";
import Slider from "react-slick";
import "./ExploreSlider.css"; // Component-specific styles

const ExploreSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider explore-slider">
      <div className="explore-button">
        <h2>Explore</h2>
      </div>
      <Slider {...settings}>
        <div>
          <img src="hair-1.jpg" alt="Explore 1" />
        </div>
        <div>
          <img src="hair-2.jpg" alt="Explore 2" />
        </div>
        <div>
          <img src="hair-3.jpg" alt="Explore 3" />
        </div>
      </Slider>
    </div>
  );
};

export default ExploreSlider;
