import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './Home.css'
import Landing from '../../components/landing/Landing'
import Silder from '../../components/Carosal/Silder'


function Home() {
  

  return (
    < >

      
      <Landing/>
      <div className='container'><Silder/></div>

    </>
  )
}

export default Home