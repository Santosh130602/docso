import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/search';
import LabCard from '../components/labCard';
import LabPage from '../components/lab';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast'

const Doctor = () => {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Header/>
      <SearchBar/>
      <LabPage/>
      <Footer/>
    </div>
  );
}
export default Doctor;