// "use client";

// import React, { useEffect, useState } from "react";
// import { CiSearch } from "react-icons/ci";
// import Autocomplete from "@mui/material/Autocomplete";
// import TextField from "@mui/material/TextField";
// import fetchCities from "../Services/fetchCities";

// export default function Search({ place, setPlace, onSearchClick }) {
//   const [options, setOptions] = useState([]);
//   const [loading, setLoading] = useState("no place available");

//   useEffect(() => {
//     if (!place) {
//       setOptions([]);
//       return;
//     }

//     const delayDebounce = setTimeout(() => {
//       setLoading(true);
//       fetchCities(place)
//         .then((cities) => {
//           setOptions(cities);
//           setLoading(false);
//         })
//         .catch((err) => {
//           console.error("Error fetching cities:", err);
//           setLoading(false);
//         });
//     }, 40);

//     return () => clearTimeout(delayDebounce);
//   }, [place]);

//   const handleSearchClick = () => {
//     onSearchClick();
//     setPlace("");
//   };

//   return (
//     <div className="flex items-start m-4 w-full p-2 lg:border-b-2 lg:border-gray-400">
//       <Autocomplete
//         freeSolo
//         loading={loading}
//         options={options}
//         inputValue={place}
//         onInputChange={(event, newInputValue) => setPlace(newInputValue)}
//         className="flex-1"
//         sx={{
//           flex: 1,
//           "& .MuiInputBase-input": {
//             color: "white",
//           },
//           "& .MuiInputLabel-root": {
//             color: "gray",
//           },
//           "& .MuiOutlinedInput-root": {
//             borderBottom: "2px solid rgba(255, 255, 255, 0.3)",
//             "&.Mui-focused fieldset": {
//               borderColor: "white",
//             },
//           },
//         }}
//         renderInput={(params) => (
//           <TextField
//             {...params}
//             label="Search city..."
//             variant="standard"
//             InputLabelProps={{ style: { color: "white" } }}
//           />
//         )}
//       />

//       <button
//         onClick={handleSearchClick}
//         className="text-sm text-white hover:text-gray-500 transition-all pt-1 p-1 md:p-2 lg:pb-3 mr-3"
//       >
//         <CiSearch className="text-2xl md:text-2xl lg:text-4xl" />
//       </button>
//     </div>
//   );
// }


"use client";

import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import fetchCities from "../Services/fetchCities";

export default function Search({ place, setPlace, onSearchClick }) {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!place) {
      setOptions([]);
      return;
    }

    const delayDebounce = setTimeout(() => {
      setLoading(true);
      fetchCities(place)
        .then((cities) => {
          setOptions(cities);
          setLoading(false);
          // If no cities are found, set the error state to true
          if (cities.length === 0) {
            setError(true);
          } else {
            setError(false);
          }
        })
        .catch((err) => {
          console.error("Error fetching cities:", err);
          setLoading(false);
        });
    }, 500); // Debounce delay to avoid excessive API calls

    return () => clearTimeout(delayDebounce);
  }, [place]);

  const handleSearchClick = (e) => {
    // Prevent further actions if there is an error or the input is empty
    if (error || place === "") {
      e.preventDefault();
      return;
    }
    onSearchClick();
    setPlace("");
  };

  return (
    <div className="flex items-start m-4 w-full p-2 lg:border-b-2 lg:border-gray-400">
      <Autocomplete
        freeSolo
        loading={loading}
        options={options}
        inputValue={place}
        onInputChange={(event, newInputValue) => setPlace(newInputValue)}
        className="flex-1"
        sx={{
          flex: 1,
          "& .MuiInputBase-input": {
            color: "white",
          },
          "& .MuiInputLabel-root": {
            color: "gray",
          },
          "& .MuiOutlinedInput-root": {
            borderBottom: "2px solid rgba(255, 255, 255, 0.3)",
            "&.Mui-focused fieldset": {
              borderColor: "white",
            },
          },
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search city..."
            variant="standard"
            InputLabelProps={{ style: { color: "white" } }}
          />
        )}
      />

      <button
        onClick={handleSearchClick}
        className="text-sm text-white hover:text-gray-500 transition-all pt-1 p-1 md:p-2 lg:pb-3 mr-3"
        disabled={error || place === ""} // Disable button if there's an error or empty input
      >
        <CiSearch className="text-2xl md:text-2xl lg:text-4xl" />
      </button>

      {error && (
        <span className="text-red-500 text-sm mt-2">City not found</span> // Show error message
      )}
    </div>
  );
}
