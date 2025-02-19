import React from "react";
import Header from "../Components/Header";
import MapApp from "../Components/Explore/MapApp";
import MapTest from "../Components/Explore/mapTest";
import 'leaflet/dist/leaflet.css';

const Explore = () => {
  return (
    <div>
      <Header/>
      {/* <MapApp/> */}
      <MapTest />
    </div>
  );
};

export default Explore;
