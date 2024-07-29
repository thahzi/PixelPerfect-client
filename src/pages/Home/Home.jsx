import React from 'react'
import './Home.css'
import Landing from '../../components/landing/Landing'
import Silder from '../../components/Carosal/Silder'
import About from '../Aboutus/About'
import Testimonials from '../../components/Testimonials/Testimonials'



function Home() {
  

  return (
    < >

      
      <Landing/>
      <div ><Silder/></div>
      <div id='boutus' ><About/></div>
      <div><Testimonials/></div>


    </>
  )
}

export default Home