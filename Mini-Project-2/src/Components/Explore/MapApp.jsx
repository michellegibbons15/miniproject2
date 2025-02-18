import { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapComponent from "./MapComponent";

export default function MapApp() {
  const [visibleLocations, setVisibleLocations] = useState([]);
    // console.log('MapApp')
    const center=[37.54098827038492, -77.44116102690121];
    const zoom=20
    // console.log('Map Center', center)
    // console.log('Map Zoom', zoom)

  return (
    <div className="flex w-full h-screen">
      {/* Sidebar */}
      <div className="w-1/3 p-4 overflow-y-auto bg-gray-100">
        <h2 className="text-xl font-bold">Visible Locations</h2>
        <ul>
          {visibleLocations.map((loc) => (
            <li key={loc.id}>{loc.name}</li>
          ))}
        </ul>
      </div>

      {/* Map */}
      <div id="map" className="w-2/3 h-full">
      {/* {console.log('MapContainer')} */}
        <MapContainer
          center={center}
          zoom={zoom}
          className="w-full h-full"
        >
            {/* {console.log('Tile Layer')} */}
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {/* {console.log('Map Container Interior')} */}
          <MapComponent setVisibleLocations={setVisibleLocations} />
        </MapContainer>
      </div>
    </div>
  );
}

