import React from "react";
import Slider from "react-slick";
import "./KeraSmoothSlider.css"; // Component-specific styles

const KeraSmoothSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="slider kera-smooth-slider">
      <Slider {...settings}>
        <div>
          <img src="kera-images-1.webp" alt="KeraSmooth 1" />
        </div>
        <div>
          <img src="kera-images-2.jpg" alt="KeraSmooth 2" />
        </div>
        <div>
          <img src="kera-images-3.jpg" alt="KeraSmooth 3" />
        </div>
      </Slider>
    </div>
  );
};

export default KeraSmoothSlider;
