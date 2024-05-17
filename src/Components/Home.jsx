import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Services from './Services'
import Insursnce from './Insursnce'
import HumanBody from './HumanBody';
import Footer from './Footer'
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Services/>
      <Insursnce/>
      {/* <HumanBody/> */}
      <Footer/>
    </div>
  )
}

export default Home
