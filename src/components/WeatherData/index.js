import React, { Component } from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';

export default class WeaterData extends Component {
  render() {
    return (
      <div>
          <WeatherTemperature temperature={20} wheaterState={'SUN'}/>
          <WeatherExtraInfo humidity= { 80 } wind = {'10m/s'}/>
      </div>
    )
  }
}
