import React from 'react';
import Slider from 'react-slick';

const ResortPhotoCarousel = ({ photos }) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll:1,
    arrows: true,
    variableWidth: true,
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

// <div><img className="slider-img" src="http://res.cloudinary.com/dagjelvab/image/upload/v1489708055/resort%20pics/vail-profile.jpg"></img></div>
// <div><img className="slider-img" src="http://res.cloudinary.com/dagjelvab/image/upload/v1489734590/vail1.jpg"></img></div>
// <div><img className="slider-img" src="http://res.cloudinary.com/dagjelvab/image/upload/v1489734637/vail2.jpg"></img></div>
// <div><img className="slider-img" src="http://res.cloudinary.com/dagjelvab/image/upload/v1489734676/vail3.jpg"></img></div>
// <div><img className="slider-img" src="http://res.cloudinary.com/dagjelvab/image/upload/v1489734720/vail4.jpg"></img></div>
