
import React, { useRef } from 'react';
import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiSnow,
  WiThunderstorm,
} from 'react-icons/wi';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const weatherData = [
  { day: 'Apr 11', temp: '22°C', weatherType: 'sunny' },
  { day: 'Apr 12', temp: '20°C', weatherType: 'cloudy' },
  { day: 'Apr 13', temp: '18°C', weatherType: 'rainy' },
  { day: 'Apr 14', temp: '15°C', weatherType: 'snow' },
  { day: 'Apr 15', temp: '25°C', weatherType: 'sunny' },
  { day: 'Apr 16', temp: '21°C', weatherType: 'cloudy' },
  { day: 'Apr 17', temp: '19°C', weatherType: 'rainy' },
  { day: 'Apr 18', temp: '16°C', weatherType: 'snow' },
  { day: 'Apr 19', temp: '27°C', weatherType: 'sunny' },
  { day: 'Apr 20', temp: '23°C', weatherType: 'storm' },
];

const getWeatherIcon = (type) => {
  switch (type) {
    case 'sunny':
      return <WiDaySunny className="text-yellow-400 text-4xl" />;
    case 'cloudy':
      return <WiCloudy className="text-gray-400 text-4xl" />;
    case 'rainy':
      return <WiRain className="text-blue-400 text-4xl" />;
    case 'snow':
      return <WiSnow className="text-cyan-300 text-4xl" />;
    case 'storm':
      return <WiThunderstorm className="text-purple-500 text-4xl" />;
    default:
      return <WiCloudy className="text-gray-400 text-4xl" />;
  }
};

const ForecasteList = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = 200;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative bg-black/20 p-4 rounded-2xl shadow-lg w-full pt-10">
      <h2 className="text-xl font-semibold mb-4 text-white/70">Last 10 Days Weather</h2>

      {/* Arrows */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/20 text-black p-2 rounded-full shadow-md hover:scale-105 transition"
      >
        <FiChevronLeft size={20} />
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/20 text-black p-2 rounded-full shadow-md hover:scale-105 transition"
      >
        <FiChevronRight size={20} />
      </button>

      {/* Scrollable Row */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-scroll no-scrollbar scroll-smooth "
      >
        {weatherData.map((day, idx) => (
          <div
            key={idx}
            className="relative bg-black/30  p-4 pt-6 rounded-xl  flex-shrink-0 w-[15%] lg:gap-3"
          >
            {/* Overlapping Icon */}
            <div className="absolute -top-5 -left-5 p-4  z-50 ">
              {getWeatherIcon(day.weatherType)}
            </div>
            <div className=" mt-6 text-center text-xl font-medium text-white/70 ">{day.day}</div>
            <div className="text-center text-lg text-white/60">{day.temp}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecasteList;

