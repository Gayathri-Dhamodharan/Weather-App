'use client';

import ForecasteList from '@/Components/ForecasteList';
import Search from '@/Components/Search';
import WeatherCard from '@/Components/WeatherCard';
import WeatherDetails from '@/Components/WeatherDetails';
import React from 'react';

const Page = () => {
  return (
    <div
      className="flex flex-col md:flex-row lg:flex-row w-full h-screen bg-cover bg-center p-8  "
      style={{
         backgroundImage: "url('/backgroundWeather.jpg')",
        // backgroundColor:"yellow" 
      }}
    >
     
      {/* weatherCard and forecast detail */}
      <div className='flex flex-col flex-1 md:flex-[2] lg:flex-[2] md:flex-col lg:flex-col bg-black/10 lg:p-4 lg:rounded-l-2xl'>
  <div className='flex flex-[2] justify-end items-end '>
<WeatherCard/>
  </div>
  <div className='flex flex-[1] '>
<ForecasteList/>
  </div>
</div>


      {/* search history list and weather Detail */}
      <div className='flex flex-col flex-1 md:flex-[1] lg:flex-[1] lg:flex-col bg-black/20 lg:p-4  lg:rounded-r-2xl '>
        <div className='flex flex-1 '> 
<Search/>
        </div>
        <div className='flex flex-1 '>
          <WeatherDetails/>
        </div>
      </div>
    </div>
  );
};

export default Page;
