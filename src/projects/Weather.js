import React, { useEffect, useState } from "react";

const api = {
  key: "bba0f44227592a2e1ef392aa581f1692",
  base: "https://api.openweathermap.org/data/2.5",
};
function Weather() {
  const [query, setQuery] = useState("moscow");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    fetch(`${api.base}weather?q=${query}&unit=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((x) => console.log(x));
  }, []);

  return (
    <div className="weather">
      <h2>Weather App</h2>
      <div className="weather-content">
        <input placeholder="Enter city name" />
        <div>
          <img
            src="https://www.freeiconspng.com/uploads/cloud-heavy-rain-weather-icon--3.png"
            height="100"
            width="auto"
          />

          <h3>32℃</h3>
        </div>
      </div>
    </div>
  );
}

export default Weather;
