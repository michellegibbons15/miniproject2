import React from "react";
import "../../Styles/Dashboard/Recommendations.css";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'

const Recommendations = () => {
  return (
      <div className="suggestions">
        <h3>
        <FontAwesomeIcon icon={faLocationDot} />Local Recommendations
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
