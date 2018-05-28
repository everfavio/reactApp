import React, { Component } from 'react'

const  WheatherExtraInfo = ({humidity, wind}) => {
  return (
    <div>
      <span>{humidity + ' % - '}</span>
      <span>{wind}</span>
    </div>
  )
}

export default WheatherExtraInfo;