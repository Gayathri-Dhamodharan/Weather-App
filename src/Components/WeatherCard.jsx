import React from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

const WeatherCard = ({ Dataofweathercard }) => {
  console.log("Dataofweathercard", Dataofweathercard);

  return (
    <div
      className={`flex flex-row m-4 w-full lg:h-[25%] bg-black/10 rounded-xl   ${roboto.className}`}
    >
      {/* Celsius of the place */}
      <div className="flex justify-center items-center lg:w-1/3 w-full mb-4 lg:mb-0">
        <h1 className="text-3xl lg:text-7xl font-bold text-white/70">
          {Dataofweathercard?.current?.temp_c}°C
        </h1>
      </div>

      {/* Location, date, and condition */}
      <div className="flex flex-row justify-evenly items-center lg:w-2/3 w-full">
      
        {/* Place and date */}
        <div className="flex flex-col items-center  ">
          <p className="  text-lg lg:text-2xl font-medium text-white/70">
            {Dataofweathercard?.location?.name}
          </p>
          <p className=" text-sm lg:text-xl mt-1 text-white/80">
            {Dataofweathercard?.location?.localtime?.split(" ")[0]}
          </p>
        </div>

        {/* Icon and condition */}
        <div className="flex flex-col items-center">
          <img
            src={`https:${Dataofweathercard?.current?.condition?.icon}`}
            alt={Dataofweathercard?.current?.condition?.text}
            className="w-10 lg:w-20"
          />
          <p className=" text-sm lg:text-2xl  text-white/80">
            {Dataofweathercard?.current?.condition?.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
