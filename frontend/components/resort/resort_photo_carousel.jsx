import React from 'react';
import Slider from 'react-slick';
import CustomPrevArrow from './custom_prev_arrow';


//
// const CustomNextArrow = () => (
//   <i className="fa fa-arrow-right"></i>
// );


const ResortPhotoCarousel = ({ photos }) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll:1,
    arrows: true,
    // nextArrow: {CustomPrevArrow},
    // prevArrow: {CustomNextArrow},
    variableWidth: true
  };

  if (photos.length > 1) {
    return (
      <Slider {...settings}>
        { photos.map((photo) => (
            <div key={photo.id}>
              <img className="slider-img" src={photo.url} />
            </div>
          ))
        }
      </Slider>
    );
  } else {
    return <div></div>;
  }
};
export default ResortPhotoCarousel;
