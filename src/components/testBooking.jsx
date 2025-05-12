import React from 'react';
import { FaMicroscope, FaVial, FaLaptop } from 'react-icons/fa';
import { Search, SlidersHorizontal, ListFilter } from 'lucide-react';
import HeroImage from '../assets/hero.png'; 

const TestBookingBanner = () => {
  return (
    <>
      <div className="bg-[#01CFC7] text-white px-6 py-0 flex flex-col md:flex-row items-center justify-between relative">
        <div className="max-w-lg text-left mx-auto px-4 md:px-20 py-16 md:py-0 md:mx-0 md:max-w-xl mb-10 md:mb-0 flex-1">
          <h1 className="text-4xl md:text-5xl font-semibold">
            Book in Seconds<br />
            <span className="text-[#005F73]">Get Tested</span>
          </h1>
          <p className="mt-6 text-lg text-white font-medium font-[Lexend]">
            Fast, reliable lab test bookings with accurate<br />
            results delivered to you.
          </p>
        </div>

        <div className="w-full md:w-auto mt-0 md:mt-10 flex justify-center md:justify-end">
          <img
            src={HeroImage}
            alt="Lab test illustration"
            className="max-w-lg w-full h-auto object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default TestBookingBanner;
