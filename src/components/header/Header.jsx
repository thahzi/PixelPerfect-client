import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Nav } from 'react-bootstrap'
import "./Header.css"



function Header() {

  return (
    <>
    
    <Nav className='d-flex justify-content-between align-items-center  shadow rounded p-4'>
      <div className="logo">
        <h3 className=''>PixelPerfect</h3>
      </div>
      <div className="midile d-flex gap-5">
        <h6>Home</h6>
        <h6>About Us</h6>
        <h6>Gallery</h6>
        <h6>Contacts</h6>
      </div>
      <div className="nav-btn d-flex gap-2 align-items-center">
        <button className='btn btn-info rounded-4'>Sign Up</button>
        <button className='btn btn-info rounded-4'>Login</button>
        <div ><FontAwesomeIcon icon={faBars} /></div>
      </div>
    
        <div className="menubar text-center pt-5 flex-column">
          <h6>Home</h6>
          <h6>About Us</h6>
          <h6>Gallery</h6>
          <h6>Contacts</h6>
        </div>
    
      
    </Nav>
    

    
    </>
  )
}

export default Header