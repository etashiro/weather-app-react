import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      city: response.data.city,
      description: response.data.condition.description,
      imageUrl: response.data.condition.icon_url,
      date: new Date(response.data.time * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="city-search" id="city-search-form">
          <div className="row">
            <div className="col-7">
              <input
                type="text"
                className="form-control shadow-sm"
                placeholder="Enter city name..."
                autoFocus="on"
                autoComplete="off"
              />
            </div>
            <div className="col-2">
              <input
                type="submit"
                className="btn btn-primary shadow-sm"
                value="Search"
              />
            </div>
          </div>
        </form>
        <div className="Weather-info">
          <h1 className="mt-3">{weatherData.city}</h1>
          <ul>
            <li>
              <FormattedDate date={weatherData.date} />
            </li>
            <li className="text-capitalize">{weatherData.description}</li>
          </ul>
          <div className="row temp-info-today">
            <div className="col-6">
              <div className="weather-information">
                <img src={weatherData.imageUrl} alt={weatherData.description} />
                <span className="temp-today">
                  {Math.round(weatherData.temperature)}
                </span>
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
  } else {
    const apiKey = "34386e004af6ea0365btbb6ff72e0aoe";
    let units = "imperial";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
