import React from "react";
import "../Styles/weatherApp.css";
import searchIcon from "../Assets/search.png";
import clear from "../Assets/clear.png";
import cloud from "../Assets/cloud.png";
import drizzle from "../Assets/drizzle.png";
import humidity from "../Assets/humidity.png";
import rain from "../Assets/rain.png";
import snow from "../Assets/snow.png";
import wind from "../Assets/wind.png";

const Weather = () => {
  let api_key = "c27743956e6d3718d177ac34feabee23";

  const search = async () => {
    const element = document.getElementsByClassName("topBar__cityInput");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");
    const humidity = document.getElementsByClassName("info-humidity-percent");
    const wind = document.getElementsByClassName("info-wind-speed");

    humidity[0].innerHTML = data.main.humidity;
    wind[0].innerHTML = data.wind.speed;
  };
  return (
    // Search Bar and search button
    <div className="container">
      <div className="topBar-container">
        <input
          className="topBar__cityInput"
          type="text"
          placeholder="Search"
        ></input>
        <div
          className="topBar__search-icon"
          onClick={() => {
            search();
          }}
        >
          <img src={searchIcon} alt="Search-Icon" />
        </div>
      </div>
      {/* End of search bar */}

      {/* Weather Icons and info */}
      <div className="weather-icon">
        <img src={cloud} alt="Cloud-icon" />
      </div>
      <div className="weather-temp">24°C</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="data__element">
          <img src={humidity} alt="" className="data__icon" />
          <div className="info">
            <div className="info-humidity-percent">65%</div>
            <div className="info__text">Humidity</div>
          </div>
        </div>
        <div className="data__element">
          <img src={wind} alt="" className="data__icon" />
          <div className="info">
            <div className="info-wind-speed">18 km</div>
            <div className="info__text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
