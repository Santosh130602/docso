import React from 'react';

const Card = ({ title, testsIncluded, originalPrice, discountedPrice, width = 'w-64 md:w-72' }) => {
  return (
    <div className={`bg-white text-left rounded-2xl shadow-md p-6 ${width}`}>
      <h2 className="text-lg font-bold text-gray-900">{title}</h2>
      <p className="text-sm text-gray-500 mt-1">Includes {testsIncluded} tests</p>
      <div className="flex items-center gap-2 mt-4">
        <span className="line-through text-gray-400">₹{originalPrice}</span>
        <span className="text-[#2A5F72] font-semibold">₹{discountedPrice}</span>
      </div>
      <button className="mt-6 bg-[#2A5F72] text-white font-semibold text-sm py-2 px-4 rounded-lg flex items-center gap-2">
        Add to cart <span className="text-xl leading-none">+</span>
      </button>
    </div>
  );
};

export default Card;
