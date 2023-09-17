import React from 'react';
import style from './Homepage.css';

function Banner() {
  return (
    <div className="banner">
      <div className="banner-text">
        <h1>UMKM.Com</h1>
        <p className="center-text">
          A platform for crowdfunding and supporting Small and Medium-sized Enterprises (UMKM) in Indonesia. We believe in the power of collective action and the potential of every idea, project, and dream.
        </p>
        <a href="#frontPage">Explore Projects</a>
      </div>
    </div>
  );
}

export default Banner;
