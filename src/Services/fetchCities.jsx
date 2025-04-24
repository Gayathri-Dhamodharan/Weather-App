

const fetchCities = async (city) => {
  const res = await fetch(
    "https://countriesnow.space/api/v0.1/countries/population/cities",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ city }),
    }
  );
console.log(res,"res");

  const data = await res.json();
  if (!res.ok || !data.data) throw new Error("API error");

  return data.data.map((item) => item.city);
};

export default fetchCities;









