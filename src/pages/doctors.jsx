import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/search';
import LabCard from '../components/labCard';
import LabPage from '../components/lab';
import Footer from '../components/Footer';

const Doctor = () => {
  return (
    <div>
      <Header/>
      <SearchBar/>
      <LabPage/>
      <Footer/>
    </div>
  );
}
export default Doctor;