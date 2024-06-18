import { useEffect, useState } from 'react';
import React from 'react';

const UseEffect = () => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        // The LEGO robot fetches data after the component mounts
        fetch('https://api.weather.com/current')
          .then(response => response.json())
          .then(data => setWeather(data));
      }, []); // Empty dependency array means this effect runs only once after the first render

  return (
    <div>
       <h1>Current Weather</h1>
      {weather ? (
        <p>Temperature: {weather.temperature}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default UseEffect
