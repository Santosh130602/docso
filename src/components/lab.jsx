import React from 'react';
import LabCard from '../components/labCard';
import Doc from '../assets/doc.jpg'
import { toast } from 'react-hot-toast';

const labs = [
  {
    name: 'SRL Diagnostics',
    location: 'Shakti Khand 4, Indrapuram, Ghaziabad',
    rating: 4.5,
    image: Doc
  },
  {
    name: 'Dr. Lal Path Labs',
    location: 'Shakti Khand 4, Indrapuram, Ghaziabad',
    rating: 4.5,
    image: Doc
  },
  {
    name: 'Max Healthcare',
    location: 'Shakti Khand 4, Indrapuram, Ghaziabad',
    rating: 4.5,
    image: Doc
  },
  {
    name: 'Fortis Healthcare',
    location: 'Shakti Khand 4, Indrapuram, Ghaziabad',
    rating: 4.5,
    image: Doc
  },
  {
    name: 'Homeo Pathology',
    location: 'Shakti Khand 4, Indrapuram, Ghaziabad',
    rating: 4.5,
    image: Doc
  },
  {
    name: 'Healtouch Pathology',
    location: 'Shakti Khand 4, Indrapuram, Ghaziabad',
    rating: 4.5,
    image: Doc
  },
];

const LabPage = () => {

  const handleAddToCart = () => {
    toast.success(`${title} added to cart`);
  };

  return (
    <div className="w-full px-4 py-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        
        <div className="hidden lg:block flex-shrink-0">
          <div className="bg-white text-left rounded-2xl shadow-md p-6 w-full w-72 lg:w-80">
            <h2 className="text-lg font-bold text-gray-900">Fever Package</h2>
            <p className="text-sm text-gray-500 mt-1">Includes 45 tests</p>
            <div className="flex items-center gap-2 mt-4">
              <span className="line-through text-gray-400">₹180</span>
              <span className="text-[#2A5F72] font-semibold">₹120</span>
            </div>
            <button onClick={()=>{
              toast.success(`Fever Package added to cart`);
            }} className="mt-6 bg-[#2A5F72] text-white font-semibold text-sm py-2 px-4 rounded-lg flex items-center gap-2 cursor-pointer">
              Add to cart <span className="text-xl leading-none">+</span>
            </button>
          </div>
        </div>

        
        <div className="flex-1 flex flex-col gap-4">
          {labs.map((lab, index) => (
            <LabCard
              key={index}
              name={lab.name}
              location={lab.location}
              rating={lab.rating}
              image={lab.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LabPage;
