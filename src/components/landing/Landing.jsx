import React from 'react'
import './Landing.css'
import Header from '../header/Header'


function Landing() {
  return (
    <>
    <Header btnShow= {true} />
        <div className="landingHero"></div>
            <div className="container  landingTitle ">
                <h5 className='text-light'>PIXELPERFECT</h5>
                <h1 className='text-light '>SHOWCASE <span >YOUR</span> </h1>
                <h1 className='text-light ' >PHOTOGRAPHY </h1>
                <h5 className='text-light pt-3'>upload your portfolio</h5>
            </div>
    
    </>
  )
}

export default Landing