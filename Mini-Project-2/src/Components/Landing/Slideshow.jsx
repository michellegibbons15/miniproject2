import React from 'react';
import "../../Styles/Landing/Slideshow.css";
import facilityImg from "../../assets/landing/facility.jpg";
import trackImg from "../../assets/landing/track.jpg";
import golfImg from "../../assets/landing/golf.jpg";
import basketballImg from "../../assets/landing/basketball.jpg"

const images = [facilityImg, trackImg, basketballImg, golfImg];
  
  const Slideshow = () => (
    <div className="slideshow-container">
      {images.map((img, index) => (
        <div className="slides fade" key={index}>
          <img src={img} className="slide-img" alt="Slideshow" />
        </div>
      ))}
      <button className="prev">&#10094;</button>
      <button className="next">&#10095;</button>
    </div>
  );
  
  export default Slideshow;
