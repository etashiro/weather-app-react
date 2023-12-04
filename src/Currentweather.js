import React from "react";

import "./Currentweather.css";

export default function Currentweather() {
  let weatherData = {
    city: "New York",
    date: "Friday 12:07 PM",
    description: "Cloudy",
    imageUrl:
      "https://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png",
    humidity: 50,
    wind: 10,
  };
  return (
    <div className="Currentweather">
      <h1>{weatherData.city}</h1>
      <ul>
        <li>{weatherData.date}</li>
        <li>{weatherData.description}</li>
      </ul>
      <div className="row temp-info-today">
        <div className="col-6">
          <div className="weather-information">
            <img src={weatherData.imageUrl} alt={weatherData.description} />
            <span className="temp-today">20</span>
            <span className="units">°F</span>
          </div>
        </div>
        <div className="col-6 additional-weather-info">
          <ul>
            <li>Humidity: {weatherData.humidity} %</li>
            <li>Wind: {weatherData.wind} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}