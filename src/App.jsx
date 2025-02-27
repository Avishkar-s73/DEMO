import React, { useState } from "react";

const App = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });

  // Function to Get User's Location
  const getLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  // Function to Open Google Maps with Directions
  const openGoogleMaps = () => {
    if (location.latitude && location.longitude) {
      const mapsURL = `https://www.google.com/maps/dir/?api=1&destination=${location.latitude},${location.longitude}`;
      window.open(mapsURL, "_blank"); // Opens in a new tab
    } else {
      alert("Please get your location first!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Dummy Location App</h1>
      <button onClick={getLocation}>📍 Get My Location</button>
      {location.latitude && location.longitude && (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
          <button onClick={openGoogleMaps}>🗺️ Get Directions</button>
        </div>
      )}
    </div>
  );
};

export default App;
