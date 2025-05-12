import React from 'react';
import { MapPin, Users } from 'lucide-react';

const LabCard = ({ image, name, location, rating }) => {
  return (
    <div className="flex items-start gap-4 p-6 md:p-8 bg-white rounded-xl shadow border border-gray-100 w-full max-w-3xl">

      <img
        src={image}
        alt={name}
        className="w-28 h-32 md:h-28 rounded-lg object-cover"
      />
      <div className="flex-1">
        <h3 className="text-lg font-bold text-gray-900">{name}</h3>
        <p className="flex items-center text-sm text-gray-600 mt-1">
          <MapPin size={14} className="mr-1" />
          {location}
        </p>
        <p className="flex items-center text-sm text-gray-600 mt-1">
          <Users size={14} className="mr-1" />
          Services <span className="ml-1">▼</span>
        </p>
      </div>
      <div className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-semibold">
        ⭐ {rating}
      </div>
    </div>
  );
};

export default LabCard;
