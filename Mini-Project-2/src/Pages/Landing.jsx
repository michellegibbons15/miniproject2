import React from 'react'
import Header from '../Components/Header'
import Slideshow from '../Components/Landing/Slideshow'
import Homepage from '../Components/Landing/Homepage'
import Reviews from '../Components/Landing/Reviews'
import Footer from '../Components/Landing/Footer'

const Landing = () => {
  return (
    <div className="landing">
      <Header/>
      <main>
        <Slideshow/>
        <Homepage />
        <Reviews />
      </main>
      <Footer />
    </div>
  )
}

export default Landing
