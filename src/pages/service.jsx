import React from 'react';
import Header from '../components/Header';
import ServicImg from "../assets/servic.jpg";
import SearchBar from '../components/search';
import FeverPackageGrid from '../components/favPakage';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast'

const Service = () => {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Header />

      <div
        className="w-11/12 h-56 md:h-64 rounded-xl bg-cover bg-center flex items-center mx-auto mt-6 px-6 md:px-12"
        style={{
          backgroundImage: `url(${ServicImg})`,
        }}
      >
        <div className="p-6 rounded-lg max-w-md text-left ">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Fever Testing <br className="hidden md:block" /> Available Now
          </h2>
          <p className="text-black mt-2 text-sm md:text-base">
            Protect your loved ones
          </p>
        </div>
      </div>

      <div>
        <SearchBar />
      </div>
      <div>
        <FeverPackageGrid/>
      </div>
      <div>
        <Footer/>
      </div>



    </div>
  );
};

export default Service;
