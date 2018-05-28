import React, { Component } from 'react';
import WeatherIcons from 'react-weathericons';

import { CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY} from './../../constants/weather';

const stateToIconName = (weatherState) => {
  switch (weatherState) {
    case CLOUD:
      return "cloud";
    case CLOUDY:
      return "cloudy";
    case SUN:
      return "day-sunny";
    case RAIN:
      return "rain";
    case SNOW:
      return "snow";
    case WINDY:
      return "windy";
    default:
      return (<WeatherIcons name="sleet" size = "2x"/>)
  }
}

const getWeatherIcon = (weatherState) => {
  return (<WeatherIcons name={stateToIconName} size="2x"/> )
};

const WeatherTemperature = ({temperature, weatherState}) => {
  return (
    <div>
      <span>
          {getWeatherIcon(weatherState)}
          <WeatherIcons name="sleet" size="2x"/>
          <span> {`${temperature}`} </span>
      </span>
    </div>
  )
}
export default WeatherTemperature;