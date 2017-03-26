import React from 'react';
import ResortIndexContainer from './resort_index_container';
import SearchBarContainer from '../search/search_bar_container';


const Home = () => (
  <div className="main-content">
    <section className="video-holder">
      <video loop muted autoPlay className="fullscreen-bg__video">
        <source src="http://res.cloudinary.com/dagjelvab/video/upload/v1489725952/main_page_video_i5mhk1.mp4"
          poster="http://res.cloudinary.com/dagjelvab/image/upload/v1490512290/video_poster.png"
          type="video/mp4"/>
      </video>
      <nav className="title-holder">
        <h1 className="title">Snowscape</h1>
        <h4 className="tagline">Your guide to the world's greatest mountains</h4>
        <SearchBarContainer path="/" class="home-search-bar" />
      </nav>

    </section>
    <ResortIndexContainer />
  </div>
);

export default Home;
