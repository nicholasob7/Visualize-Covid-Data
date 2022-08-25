import React from "react";
import { GeoJSON, MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./CovidMap.css";


export default function NewCovidMap({ countries }) {

  const mapStyle = {
    fillColor: "white",
    weight: 1,
    color: "#f6fbff",
    fillOpacity: 1,
  };



  const onEachCountry = (country, layer) => {
    layer.options.fillColor = country.properties.color;
    const name = country.properties.ADMIN;
    console.log(name)
    const Deaths = country.properties.Deaths;
    layer.bindPopup(`${name} ${Deaths}`);
  };
  return (
    <MapContainer
      style={{ height: "80vh" }}
      zoom={1}
      center={[20, 90]}>
      <GeoJSON
        style={mapStyle}
        data={countries}
        onEachFeature={onEachCountry}
      />

      <div className="leaflet-control leaflet-bar" id="info-pane">

      </div>


    </MapContainer>
  );
}
