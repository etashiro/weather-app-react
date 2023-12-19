import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  return (
    <span className="WeatherTemperature">
      <span className="temp-today">{Math.round(props.fahrenheit)}</span>
      <span className="units">°F </span>
    </span>
  );
}
