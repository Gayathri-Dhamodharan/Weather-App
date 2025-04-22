"use client";

import React, { useState, useCallback } from "react";
import WeatherService from "@/services/WeatherService";

import ForecasteList from "@/Components/ForecasteList";
import Search from "@/Components/Search";
import WeatherCard from "@/Components/WeatherCard";
import WeatherDetails from "@/Components/WeatherDetails";

const Page = () => {
  const [place, setPlace] = useState(""); // Initial place is empty
  const [weatherData, setWeatherData] = useState(null);
  const [searchClicked, setSearchClicked] = useState(false);

  const debouncedSearch = useCallback(
   
    (place) => {
      const fetchWeather = async () => {
        const data = await WeatherService(place);
        console.log("Weather API Data:", data);
        setWeatherData(data);
      };

      fetchWeather();
    },
    []
  );

  const handleSearchClick = () => {
    setSearchClicked(true); // Trigger the API call when search button is clicked
    if (place) {
      debouncedSearch(place); // Call the debounced search
    }
  };

  return (
    <div
      className="flex flex-col md:flex-row lg:flex-row w-full h-screen bg-cover bg-center lg:p-8 md:p-6 p-4"
      style={{
        backgroundImage: "url('/backgroundWeather.jpg')",
      }}
    >
      {/* weatherCard and forecast detail */}
      <div className="flex flex-col flex-1 md:flex-[2] lg:flex-[2] md:flex-col lg:flex-col bg-black/10 lg:p-4 lg:rounded-l-2xl">
        <div className="flex flex-[2] justify-end items-end">
          <WeatherCard Dataofweathercard={weatherData} />
        </div>
        <div className="flex flex-[1]">
          <ForecasteList DataforforecasteList={weatherData} />
        </div>
      </div>

      {/* search and weather detail */}
      <div className="flex flex-col flex-1 md:flex-[1] lg:flex-[1] lg:flex-col bg-black/20 lg:p-4 lg:rounded-r-2xl">
        <div className="flex flex-1">
          <Search
            place={place}
            setPlace={setPlace}
            onSearchClick={handleSearchClick}
          />
        </div>
        <div className="flex flex-1">
          <WeatherDetails
            Dataofweatherdetail={weatherData}
            onSearchClick={searchClicked}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
