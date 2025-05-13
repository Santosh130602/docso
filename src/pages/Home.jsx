import '../App.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import TestBookingBanner from '../components/testBooking'
import PopularLabTests from '../components/PopularLabTest'
import SearchBar from '../components/search'
import { Toaster } from 'react-hot-toast'

function Home() {


  return (
    <div>
    <Toaster position="top-center" reverseOrder={false} />
    <Header/>
    <TestBookingBanner/>
    <SearchBar/>
    <PopularLabTests/>
      <Footer/>
    </div>
  )
}

export default Home