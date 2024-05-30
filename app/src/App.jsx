import React from 'react'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import Destinations from './Component/Destinations'
import Search from './Component/Search'
import Slider from './Component/Slider'
import Selects from './Component/Selects'
import FooterB from './Component/FooterB'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Destinations/>
    <Search/>
    <Selects/>
    <Slider/>
    <FooterB/>
    </>
  )
}

export default App