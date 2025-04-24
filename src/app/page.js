
"use client";

import React, { useState, useCallback } from "react";
import WeatherService from "@/services/WeatherService";

import ForecasteList from "@/Components/ForecasteList";
import Search from "@/Components/Search";
import WeatherCard from "@/Components/WeatherCard";
import WeatherDetails from "@/Components/WeatherDetails";
import { getWeatherFolder, getRandomImage } from "@/Components/Background";

const Page = () => {
  const [place, setPlace] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [searchClicked, setSearchClicked] = useState(false);
  const [backgroundImagePath, setBackgroundImagePath] = useState("");

  const debouncedSearch = useCallback((place) => {
    const fetchWeather = async () => {
      const data = await WeatherService(place);
      console.log("Weather API Data:", data);
      setWeatherData(data);
    };

    fetchWeather();
  }, []);

  const handleSearchClick = async () => {
    setSearchClicked(true);
    if (!place) return;

    const data = await WeatherService(place);
    setWeatherData(data);

    const weatherName = data?.current?.condition?.text;
    const folder = getWeatherFolder(weatherName);
    const imagePath = getRandomImage(folder);
    setBackgroundImagePath(imagePath); //set background after everything
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImagePath})` }}
    >
      {/*layout for mobile screen*/}
      <div className="flex flex-col md:hidden w-full p-4">
        <div className="m-[0.5] bg-black/20 rounded-xl">
          <p className="text-center text-3xl font-bold text-white/80 mt-1 mb-2">
            Weather App
          </p>
          <div>
            <Search
              place={place}
              setPlace={setPlace}
              onSearchClick={handleSearchClick}
            />
          </div>

          <div className="mx-4 mb-2 bg-black/20 rounded-xl p-2 ">
            <WeatherCard Dataofweathercard={weatherData} />
          </div>
          <div className="mx-4">
            <ForecasteList DataforforecasteList={weatherData} />
          </div>
          <div className="mb-2 mx-4 pr-2 rounded-xl">
            <WeatherDetails
              Dataofweatherdetail={weatherData}
              onSearchClick={searchClicked}
            />
          </div>
        </div>
      </div>

      {/* layout for lap and tab screen */}
      <div className="hidden md:flex flex-row w-full h-screen md:p-8">
        {/*Search and WeatherDetails */}
        <div className="flex flex-col flex-1 bg-black/20 md:p-3 md:rounded-tl-2xl md:rounded-bl-2xl">
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

        {/*WeatherCard and Forecast */}
        <div className="flex flex-col flex-[2] bg-black/10 md:p-4  md:rounded-tr-2xl md:rounded-br-2xl md:w-[80%] lg:w-full">
          <div className="flex flex-[2] flex-col justify-between">
            <p className="text-center text-7xl font-bold text-white/70 p-4">
              Weather App
            </p>

            <WeatherCard
              Dataofweathercard={weatherData}
              className="flex flex-[1] justify-end items-end"
            />
          </div>
          <div className="flex flex-[1] justify-end items-end">
            <ForecasteList DataforforecasteList={weatherData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
