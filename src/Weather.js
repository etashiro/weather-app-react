import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

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

  function search() {
    const apiKey = "34386e004af6ea0365btbb6ff72e0aoe";
    let units = "imperial";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit} className="city-search">
          <div className="row">
            <div className="col-7">
              <input
                type="text"
                className="form-control shadow-sm"
                placeholder="Enter city name..."
                autoFocus="on"
                autoComplete="off"
                onChange={handleCityChange}
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
        <WeatherInfo data={weatherData} />
        <WeatherForecast searchedCity={weatherData.city} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
