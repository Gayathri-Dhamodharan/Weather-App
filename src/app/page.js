

"use client";

import React, { useState, useCallback } from "react";
import WeatherService from "@/services/WeatherService";

import ForecasteList from "@/Components/ForecasteList";
import Search from "@/Components/Search";
import WeatherCard from "@/Components/WeatherCard";
import WeatherDetails from "@/Components/WeatherDetails";

const Page = () => {
  const [place, setPlace] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [searchClicked, setSearchClicked] = useState(false);
  // console.log("text",weatherData.current.condition.text);
  

  const debouncedSearch = useCallback((place) => {
    const fetchWeather = async () => {
      const data = await WeatherService(place);
      console.log("Weather API Data:", data);
      setWeatherData(data);
    };

    fetchWeather();
  }, []);

  const handleSearchClick = () => {
    setSearchClicked(true);
    if (place) {
      debouncedSearch(place);
    }
  };

  return (
    <>
      {/* ✅ Mobile layout (visible only on sm/md) */}
      <div
        className="flex flex-col md:hidden w-full p-4 bg-cover bg-center  "
        style={{ backgroundImage: "url('/backgroundWeather.jpg')" }}
      >
        <div className="m-[0.5] bg-black/20 rounded-xl">
          <p className="text-center text-2xl font-bold text-white/80 mt-1 ">
            Weather App
          </p>
          <div>
            <Search
              place={place}
              setPlace={setPlace}
              onSearchClick={handleSearchClick}
            />
          </div>

          <div className="mx-4 mb-2">
            <WeatherCard Dataofweathercard={weatherData} />
          </div>

          <div className="mx-4 ">
            <ForecasteList DataforforecasteList={weatherData} />
          </div>

          <div className="mb-2 mx-4 pr-2  rounded-xl">
            <WeatherDetails
              Dataofweatherdetail={weatherData}
              onSearchClick={searchClicked}
            />
          </div>
        </div>
      </div>

      {/* ✅ Desktop layout (visible only on lg) */}
      <div
        className="hidden lg:flex flex-row w-full h-screen bg-cover bg-center lg:p-8"
        style={{
          backgroundImage: "url('/backgroundWeather.jpg')",
        }}
      >
        {/* Left section: Search and WeatherDetails */}
        <div className="flex flex-col flex-1 bg-black/20 lg:p-3  lg:rounded-tl-2xl lg:rounded-bl-2xl">
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

        {/* Right section: WeatherCard and Forecast */}
        <div className="flex flex-col flex-[2] bg-black/10 lg:p-4  lg:rounded-tr-2xl lg:rounded-br-2xl">
          <div className="flex flex-[2] flex-col justify-between">
            <p className="text-center text-7xl font-bold text-white/70 p-4">
              Weather App
            </p>

            <WeatherCard Dataofweathercard={weatherData} />
          </div>
          <div className="flex flex-[1] justify-end items-end">
            <ForecasteList DataforforecasteList={weatherData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

