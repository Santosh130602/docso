import React from 'react';
import { Search, SlidersHorizontal, ListFilter } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="flex items-center gap-2 p-4 md:p-12 px-12 md:px-32 mt-6 mb-4">
      <div className="flex items-center px-2 py-2 md:px-4 md:py-4 rounded-lg md:rounded-xl border border-gray-300 w-full">
        <Search className="text-[#2A5F72] mr-4" size={20} />
        <input
          type="text"
          placeholder="Search tests..."
          className="flex-grow outline-none text-gray-700 placeholder-gray-400"
        />
        <SlidersHorizontal className="text-[#2A5F72]" size={20} />
      </div>
      <button className="p-2 md:p-4 rounded-lg md:rounded-xl border border-gray-300">
        <ListFilter className="text-[#2A5F72]" size={20} />
      </button>
    </div>
  );
};

export default SearchBar;
