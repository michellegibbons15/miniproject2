import { useEffect } from "react";
import { Marker, Popup, useMap } from "react-leaflet";

const locations = [
  { id: 1, name: "SCOR Sports Center of Richmond", coords: [37.563497319335085, -77.45536266100204] },
  { id: 2, name: "UofR Disc Golf Course", coords: [37.57413903490411, -77.544733974497] },
  { id: 3, name: "Duncroft Park: Disc Golf Course", coords: [37.65914945027343, -77.54328158983348] },
  { id: 4, name: "Bryan Park", coords: [37.59619363659579, -77.47298547261256] },
  { id: 5, name: "Glover Park", coords: [37.68041329520456, -77.49147933216292] },
  { id: 6, name: "Dorey Park", coords: [37.4652048989862, -77.34021672214817] },
  { id: 7, name: "Gillies Creek Park: Disc Golf Course", coords: [37.522199038291156, -77.4100930610035] },
];

const MapComponent = ({ setVisibleLocations }) => {
  const map = useMap();

  useEffect(() => {
    // console.log('Map Object', map)
    const updateVisibleMarkers = () => {
      const bounds = map.getBounds();
      // console.log('current bounds', bounds)
      const visible = locations.filter(({ coords }) => bounds.contains(coords));
      // console.log('visible locations', visible)
      setVisibleLocations(visible);
    };

    map.on("moveend", updateVisibleMarkers);
    updateVisibleMarkers();
  }, [map, setVisibleLocations]);

  return (
    <>
      {locations.map((loc) => (
        <Marker key={loc.id} position={loc.coords}>
          <Popup>{loc.name}</Popup>
        </Marker>
      ))}
    </>
  );
};

export default MapComponent;
