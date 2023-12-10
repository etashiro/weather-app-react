import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [units, setUnits] = useState("fahrenheit");

  function showCelsius(event) {
    event.preventDefault();
    setUnits("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnits("fahrenheit");
  }

  function celsius() {
    return ((props.fahrenheit - 32) * 5) / 9;
  }

  if (units === "fahrenheit") {
    return (
      <span className="WeatherTemperature">
        <span className="temp-today">{Math.round(props.fahrenheit)}</span>
        <span className="units">
          °F |{" "}
          <a href="/" onClick={showCelsius}>
            °C
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemperature">
        <span className="temp-today">{Math.round(celsius())}</span>
        <span className="units">
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>{" "}
          | °C
        </span>
      </span>
    );
  }
}
