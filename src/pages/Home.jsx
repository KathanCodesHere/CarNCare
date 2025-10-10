import React from 'react'
import Hero from '../Components/Hero'
import SliderSection from '../Components/SliderSection'
import AboutSec from '../Components/AboutSec'
import FeaturedCars from '../Components/FeaturedCars'
import BrandsGrid from '../Components/BrandsGrid'

const Home = () => {
  return (
    <div>
      <Hero/>
      <SliderSection/>
      <FeaturedCars/>
      <AboutSec/>
      <BrandsGrid/>
    </div>
  )
}

export default Home