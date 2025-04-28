 
 
 "use client";

import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const OnBoard = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center m-4 rounded-2xl"
      style={{ backgroundImage: "url('/backgroundWeather.jpg')" }}
    >
      <div className="p-10 rounded-2xl  text-center flex items-center gap-4">
        <CircularProgress sx={{ color: "black" }} size={60} />
        <p className="text-xl font-semibold text-black">Loading...</p>
      </div>
    </div>
  );
};

export default OnBoard;