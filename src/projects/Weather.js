import React, { useEffect, useState } from "react";

const api = {
  key: "bba0f44227592a2e1ef392aa581f1692",
  base: "https://api.openweathermap.org/data/2.5/",
};
function Weather() {
  const [query, setQuery] = useState("Phnom Penh");
  const [weather, setWeather] = useState("");

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((x) => {
          setWeather(x);
          setQuery("");
          console.log(x.main.temp);
        });
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className="weather">
      <h2>Weather App</h2>
      <div className="weather-content">
        <input
          placeholder="Enter city name"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
        <div>
          <img
            src="https://www.freeiconspng.com/uploads/cloud-heavy-rain-weather-icon--3.png"
            height="100"
            width="auto"
          />

          <div>
            {typeof weather.main != "undefined" ? (
              <div>
                <h2>
                  {weather.name}, {weather.sys.country}
                </h2>
                <p>{dateBuilder(new Date())}</p>

                <h3 className="temp">{weather.main.temp}℃</h3>
                <p className="weather-type">{weather.weather[0].main}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
