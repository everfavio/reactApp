import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

export default class WeatherLocation extends Component {
  render() {
    return (
      <div>
        <Location city={'La Paz'}/>
        <WeatherData/>
      </div>
    )
  }
}
