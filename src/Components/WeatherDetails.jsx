import React, { useState, useEffect } from 'react';

const WeatherDetails = () => {
  // Step 1: Set default values (these will be overwritten after API call)
  const [weatherData, setWeatherData] = useState({
    clouds: { all:0 }, // Cloudy
    main: { humidity: 0 }, // Humidity
    wind: { speed: 0 }, // Wind
    rain: { '1h': 0 }, // Rain (in last 1 hour)
    coord: { lat: 0.00, lon: 0.00 }, // Latitude and Longitude
  });

  useEffect(() => {
    // Simulate an API call with setTimeout to fetch weather data
    setTimeout(() => {
      const fetchedData = {
        clouds: { all: 70 },
        main: { humidity: 75 },
        wind: { speed: 10 },
        rain: { '1h': '15km/h' },
        coord: { lat: 40.71, lon: -74.01 }, 
      };

      setWeatherData(fetchedData); // Update state with fetched data
    }, 2000); 
  }, []);

  const detailKeys = {
    Cloudy: weatherData?.clouds?.all,
    Humidity: weatherData?.main?.humidity,
    Wind: weatherData?.wind?.speed,
    Rain: weatherData?.rain?.['1h'] || 0, // rain in the last 1 hour
    Latitude: weatherData?.coord?.lat,
    Longitude: weatherData?.coord?.lon
  };

  return (
    <div className="m-4 w-full ">
      <p className="text-2xl text-gray-300">Weather Details</p>
      <div className="mt-4 ">
        {Object.entries(detailKeys).map(([key, value]) => (
          <div key={key} className="flex justify-between  items-center mb-2 p-2">
            <p className="text-sm text-white/60 lg:text-2xl">{key}</p>
            <p className="text-lg  text-white/80  lg:text-xl">{value ?? 'N/A'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDetails;
