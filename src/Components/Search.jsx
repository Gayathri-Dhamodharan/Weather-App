"use client";

import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function Search() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", query);
    // You can add your search logic or routing here
  };

  return (
    <div className="flex items-start m-4 lg:border-b-2 lg:border-gray-400 w-full p-2">
       <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 bg-transparent border-b-2 border-gray-400 outline-none px-2 py-1 text-white text-3xl   placeholder-gray-400  h-2% w-full"
      />
      <button
        onClick={handleSearch}
        className="text-sm text-white hover:text-gray-300 transition-all pb-3   "
      >
       <CiSearch className="text-4xl  " />
      </button>
    </div>
  );

}
