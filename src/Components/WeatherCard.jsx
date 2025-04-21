import React from 'react'
import { WiDaySunny } from 'react-icons/wi';

const WeatherCard = () => {
  return (
    <div className='flex m-3 justify-start w-full lg:h-[25%]'>

      {/* Celsius of the place */}
      <div className='flex-1 flex justify-center items-center'>
        <h1 className='text-8xl font-bold text-white/70'>19°C</h1>
      </div>

      {/* Location, date, and condition */}
      <div className='flex-1 flex'>

        {/* Place and date */}
        <div className='flex-1 flex flex-col justify-between items-center  bg-red-200 p-4'>
          <p className='text-2xl font-medium  text-white/70'>Chennai</p>
          <p className='text-sm text-white/80'>21-04-2025</p>
        </div>

        {/* Icon and condition */}
        <div className='flex-1 flex flex-col justify-center items-center'>
          <WiDaySunny className='text-4xl text-yellow-400' />
          <p className='text-md mt-1'>Sunny</p>
        </div>
        
      </div>
    </div>
  )
}

export default WeatherCard
