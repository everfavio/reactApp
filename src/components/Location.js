import React, { Component } from 'react'

const Location = (props) => {
  console.log(props);
  const { city } = props;
  debugger;
  return (
    <div>
      <h1>
        {city}
      </h1>
    </div>
  )
};

export  default Location;