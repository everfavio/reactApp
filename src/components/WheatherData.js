import React, { Component } from 'react';
import WheatherTemperature from './WheatherTemperature';
import WheatherExtraInfo from './WheatherExtraInfo';

export default class WheaterData extends Component {
  render() {
    return (
      <div>
          <WheatherTemperature temperature={20}/>
          <WheatherExtraInfo humidity= { 80 } wind = {'10m/s'}/>
      </div>
    )
  }
}
