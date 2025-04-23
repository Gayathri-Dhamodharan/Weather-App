"use client";

// import { CiSearch } from "react-icons/ci";

// export default function Search({ place, setPlace, onSearchClick }) {
//   return (
//     <div className="flex items-start m-4 lg:border-b-2 lg:border-gray-400 w-full p-2">
//       <input
//         type="text"
//         placeholder="Search..."
//         value={place}
//         onChange={(e) => setPlace(e.target.value)}
//         className="flex-1 bg-transparent border-b-2 border-white/30 md:border-gray-400 outline-none px-2 py-1 text-white text-md md:text-lg lg:text-xl  placeholder-gray-400 w-full "
//       />
//       <button
//         onClick={onSearchClick}
//         className="text-sm text-white hover:text-gray-500 transition-all pt-1 p-1 md:p-2 lg:pb-3 mr-3 "
//       >
//         <CiSearch className=" text-2xl md:text-2xl lg:text-4xl" />
//       </button>
//     </div>
//   );
// }


import { CiSearch } from "react-icons/ci";

export default function Search({ place, setPlace, onSearchClick }) {
  const handleSearchClick = () => {
    onSearchClick(); // Call the onSearchClick passed as a prop if needed
    setPlace(""); // Clear the input after the button is clicked
  };

  return (
    <div className="flex items-start m-4 lg:border-b-2 lg:border-gray-400 w-full p-2">
      <input
        type="text"
        placeholder="Search..."
        value={place}
        onChange={(e) => setPlace(e.target.value)}
        className="flex-1 bg-transparent border-b-2 border-white/30 md:border-gray-400 outline-none px-2 py-1 text-white text-md md:text-lg lg:text-xl placeholder-gray-400 w-full"
      />
      <button
        onClick={handleSearchClick}
        className="text-sm text-white hover:text-gray-500 transition-all pt-1 p-1 md:p-2 lg:pb-3 mr-3"
      >
        <CiSearch className="text-2xl md:text-2xl lg:text-4xl" />
      </button>
    </div>
  );
}

