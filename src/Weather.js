import React from "react";

import "./Weather.css";

export default function Weather() {
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
    <div className="Weather">
      <form className="city-search" id="city-search-form">
        <div className="row">
          <div className="col-7">
            <input
              type="text"
              class="form-control shadow-sm"
              placeholder="Enter city name..."
              id="searched-city"
              autoFocus="on"
              autocomplete="off"
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              class="btn btn-primary shadow-sm"
              value="Search"
            />
          </div>
        </div>
      </form>
      <div className="Weather-info">
        <h1 className="mt-3">{weatherData.city}</h1>
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
    </div>
  );
}
