import React from 'react';

const WeatherDisplay = ({ weather }) => {
  const { temperature, conditions } = weather;
  const isAboveTwenty = temperature > 20;

  return (
    <div>
      <p>
        Temperature: <span style={{ color: isAboveTwenty ? 'rgb(255, 0, 0)' : 'rgb(0, 0, 255)' }}>{temperature}</span>
      </p>
      <p>Conditions: {conditions}</p>
    </div>
  );
};

export default WeatherDisplay;