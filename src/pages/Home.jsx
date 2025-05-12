import '../App.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import TestBookingBanner from '../components/testBooking'
import PopularLabTests from '../components/PopularLabTest'
import SearchBar from '../components/search'

function Home() {


  return (
    <div>
    <Header/>
    <TestBookingBanner/>
    <SearchBar/>
    <PopularLabTests/>
      <Footer/>
    </div>
  )
}

export default Home