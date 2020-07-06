import React from 'react';

const ColoredDot = ({ color }) => (
  <svg height=".6em" width=".6em">
    <circle cx="50%" cy="50%" r="40%" fill={`rgb(${color[0]}, ${color[1]}, ${color[2]})`} />
  </svg> 
)

export default ColoredDot;
