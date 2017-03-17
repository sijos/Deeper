import React from 'react';
import Slider from 'react-slick';

const ResortPhotoCarousel = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll:1,
    arrows: true,
    variableWidth: true,
  };

  return (
      <Slider {...settings}>
        <div><img className="slider-img" src="http://res.cloudinary.com/dagjelvab/image/upload/v1489708055/resort%20pics/vail-profile.jpg"></img></div>
        <div><img className="slider-img" src="http://res.cloudinary.com/dagjelvab/image/upload/v1489734590/vail1.jpg"></img></div>
        <div><img className="slider-img" src="http://res.cloudinary.com/dagjelvab/image/upload/v1489734637/vail2.jpg"></img></div>
        <div><img className="slider-img" src="http://res.cloudinary.com/dagjelvab/image/upload/v1489734676/vail3.jpg"></img></div>
        <div><img className="slider-img" src="http://res.cloudinary.com/dagjelvab/image/upload/v1489734720/vail4.jpg"></img></div>
      </Slider>
  );
};
export default ResortPhotoCarousel;
