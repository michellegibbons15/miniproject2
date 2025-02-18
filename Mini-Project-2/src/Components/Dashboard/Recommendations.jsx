import React from "react";
import "../../Styles/Dashboard/Recommendations.css";

const Recommendations = () => {
  return (
      <div className="suggestions">
        <h3>
          <i class="fa-solid fa-location-dot"></i>Local Recommendations
        </h3>
        <h4>
          <a href="#">Explore</a> these other facilities:
        </h4>
        <ul>
          <li>Ukrops Park</li>
          <li>Gillies Creek Park</li>
          <li>Duncroft</li>
          <li>Dorey Park</li>
          <li>Deep Run Park</li>
        </ul>
      </div>
  );
};

export default Recommendations;
