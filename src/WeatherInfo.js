import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="mt-3">{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row temp-info-today">
        <div className="col-6">
          <div className="weather-information">
            <img src={props.data.imageUrl} alt={props.data.description} />
            <span className="temp-today">
              {Math.round(props.data.temperature)}
            </span>
            <span className="units">°F</span>
          </div>
        </div>
        <div className="col-6 additional-weather-info">
          <ul>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {props.data.wind} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
