import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeOne from './HomeOne'
import About from './About'
import LoadTop from '../Components/LoadTop'
import Destination from './Destination'
import Service from './Service'
import Gallery from './Gallery'
import Tour from './Tour'
import TourGuide from './TourGuide'
import Pricing from './Pricing'
import Error from './Error'
import Contact from './Contact'
function RouterPage() {
  return (
    <div>
        <LoadTop />
        <Routes>
          <Route path="/" element={<HomeOne />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/destination" element={<Destination />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/tour" element={<Tour />}></Route>
          <Route path="/tour-guide" element={<TourGuide />}></Route>
          <Route path="/price" element={<Pricing />}></Route>
          <Route path="/error" element={<Error />}></Route>
          <Route path="/contact" element={<Contact />}></Route> 
        </Routes>
    </div>
  )
}

export default RouterPage