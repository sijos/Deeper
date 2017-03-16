import React from 'react';
import ResortIndexContainer from './resort_index_container';

const Home = () => (
  <div>
    <nav className="landing">
      <h1 className="title">Summit Scoop</h1>
      <h4 className="tagline">Your guide to the world's greatest mountains</h4>
    </nav>
    <ResortIndexContainer />
  </div>
);

export default Home;
