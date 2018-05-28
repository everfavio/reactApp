import React, { Component } from 'react';
import Location from './Location';
import WheaterData from './WheatherData';

export default class WheatherLocation extends Component {
  render() {
    return (
      <div>
        <Location city={'La Paz'}/>
        <WheaterData/>
      </div>
    )
  }
}
