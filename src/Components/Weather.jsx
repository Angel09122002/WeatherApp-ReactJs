import React from "react";
import "../Styles/weatherApp.css"
import search from "../Assets/search.png";
import clear from "../Assets/clear.png";
import cloud from "../Assets/cloud.png";
import drizzle from "../Assets/drizzle.png";
import humidity from "../Assets/humidity.png";
import rain from "../Assets/rain.png";
import snow from "../Assets/snow.png";
import wind from "../Assets/wind.png";

const Weather = () => {
  return (
    <div className="container">
      <div className="topBar-container">
        <input
          className="topBar__cityInput"
          type="text"
          placeholder="Search"
        ></input>
        <div className="topBar__search-icon">
          <img src={search} alt="Search-Icon" />
        </div>
      </div>
    </div>
  );
};

export default Weather;
