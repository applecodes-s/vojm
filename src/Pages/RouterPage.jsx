import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeOne from './HomeOne'
import About from './About'
import LoadTop from '../Components/LoadTop'
import Service from './Service'
import Donate from './Donate'
import Error from './Error'
import Contact from './Contact'

function RouterPage() {
  return (
    <div>
        <LoadTop />
        <Routes>
          <Route path="/" element={<HomeOne />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/donate" element={<Donate />}></Route>
          <Route path="/error" element={<Error />}></Route>
          <Route path="/contact" element={<Contact />}></Route> 
        </Routes>
    </div>
  )
}

export default RouterPage