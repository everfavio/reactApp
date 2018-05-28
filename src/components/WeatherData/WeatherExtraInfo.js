import React, { Component } from 'react'

const  WeatherExtraInfo = ({humidity, wind}) => {
  return (
    <div>
      <span>{humidity + ' % - '}</span>
      <span>{wind}</span>
    </div>
  )
}

export default WeatherExtraInfo;
