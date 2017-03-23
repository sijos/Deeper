import React from 'react';
import Slider from 'react-slick';
import PhotoCarouselItem from './photo_carousel_item';

const ResortPhotoCarousel = ({ photos }) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll:1,
    arrows: true,
    variableWidth: true
  };

  if (photos.length > 1) {
    return (
      <Slider {...settings}>
        { photos.map((photo) => (
            <div key={photo.id}>
              <PhotoCarouselItem photoUrl={photo.url} />
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
