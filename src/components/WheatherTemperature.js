import React, { Component } from 'react';
import WeatherIcons from 'react-weathericons';

const getWeatherIcon = (weatherState) => {
  switch (wheaterState) {
    case "cloud":
      return (<WheaterIcons name="cloud" size = "2x"/>);
    case "rain":
      return (<WheaterIcons name="rain" size = "2x"/>);
    default:
      return (<WheaterIcons name="sleet" size = "2x"/>)
  }
};

const WheatherTemperature = ({temperature, wheaterState}) => {
  return (
    <div>
      <span>
          12 C1
          <WeatherIcons name="sleet" size="2x"/>
          <span> {`${temperature}`} </span>
      </span>
    </div>
  )
}
export default WheatherTemperature;