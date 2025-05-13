import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Service from './pages/service'
import Doctor from './pages/doctors';

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/doctor" element={<Doctor />} />
      </Routes>
    </Router>
  )
}

export default App
