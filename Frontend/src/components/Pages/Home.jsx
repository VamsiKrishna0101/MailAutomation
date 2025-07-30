import React from 'react'
import TopBar from '../Layout/Topbar'
import MiddleBar from '../Layout/MiddleBar'
import Navbar from '../Layout/Navbar'
import Hero from '../Common/Hero'
import Services from '../Common/Services'
import Why from '../Common/Why'
import Show from '../Common/Show'
import Join from '../Common/Join'
import Footer from '../Common/Footer'
const Home = () => {
  return (
    <div>
      <Hero/>
      <Services/>
      <Why/>
      <Show/>
      <Join/>
    </div>
  )
}

export default Home
