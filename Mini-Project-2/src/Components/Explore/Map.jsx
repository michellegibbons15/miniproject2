import React from "react";

const Map = () => {
  return (
    <div className="Map-container">
      <iframe
        src="https://app.mapline.com/map/map_227b2215/N0lWc25IOEhWUHh1S2Q1Z3VBcVdGUnRKajRHYjl4bmVDQXBzZm"
        style={{width:"80%", height:"700px"}}
        allow="geolocation *"
      ></iframe>
      <div style={{fontSize: "10px"}}>
        <a href="https://mapline.com" target="_blank">
          Mapping by Mapline
        </a>
      </div>
    </div>
  );
};

export default Map;
