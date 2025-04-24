const BASE_URL = "http://api.weatherapi.com/v1/forecast.json";
const API_KEY = "038aa25ba92f41caa2554813252104"; // Replace with your real API key

const WeatherService = async (location = "chennai") => {
  const url = `${BASE_URL}?key=${API_KEY}&q=${location||"chennai"}&days=10&aqi=no&alerts=no`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch weather data");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("WeatherService Error:", error);
    return null;
  }
};

export default WeatherService;
