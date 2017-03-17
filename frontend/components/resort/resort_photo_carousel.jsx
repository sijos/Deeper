import React from 'react';
import { Carousel } from 'react-responsive-carousel';

// import 'style!css!react-responsive-carousel/lib/styles/main.css';
// import 'style!css!react-responsive-carousel/lib/styles/carousel.css';

const ResortPhotoCarousel = () => (
  <Carousel showArrows={true}>
    <div>
       <img src="http://lorempixel.com/900/500/sports/1/" />
       <p className="legend">Legend 1</p>
   </div>
   <div>
       <img src="http://lorempixel.com/900/500/sports/2/" />
       <p className="legend">Legend 2</p>
   </div>
   <div>
       <img src="http://lorempixel.com/900/500/sports/3/" />
       <p className="legend">Legend 3</p>
   </div>
   <div>
       <img src="http://lorempixel.com/900/500/sports/4/" />
       <p className="legend">Legend 4</p>
   </div>
 </Carousel>
);

export default ResortPhotoCarousel;
