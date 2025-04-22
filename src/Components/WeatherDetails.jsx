import React, { useState, useEffect } from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

const WeatherDetails = ({ Dataofweatherdetail }) => {
  console.log( "WeatherDetails",Dataofweatherdetail);

  
  const detailKeys = {
    Cloud: Dataofweatherdetail?.current?.cloud || 0,
    Humidity: Dataofweatherdetail?.current?.humidity || 0,
    Wind: Dataofweatherdetail?.current?.wind_kph || 0,
    Rain: Dataofweatherdetail?.current?.precip_in || 0,
    Latitude: Dataofweatherdetail?.location?.lat || 0,
    Longitude: Dataofweatherdetail?.location?.lon || 0,
  };

  return (
    <div className={`m-4 w-full ${roboto.className}`}>
      <p className="text-3xl font-semibold text-white drop-shadow-md">
        Weather Details
      </p>

      <div className="mt-4">
        {Object.entries(detailKeys).map(([key, value]) => (
          <div
            key={key}
            className="flex justify-between items-center mb-3 p-2 rounded-md bg-black/20 backdrop-blur-sm"
          >
            <p className="text-base md:text-lg text-white/80">{key}</p>
            <p className="text-lg md:text-xl text-white font-medium">
              {value }
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDetails;
