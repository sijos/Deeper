import React from 'react';
import ResortIndexContainer from './resort_index_container';

const Home = () => (
  <div>
    <div>
      <video loop muted autoPlay className="fullscreen-bg__video">
        <source src="http://res.cloudinary.com/dagjelvab/video/upload/v1489725952/main_page_video_i5mhk1.mp4" type="video/mp4"/>
      </video>
      <nav className="landing">
        <h1 className="title">Snowscape</h1>
        <h4 className="tagline">Your guide to the world's greatest mountains</h4>
      </nav>
    </div>
    <ResortIndexContainer />
  </div>
);

export default Home;
