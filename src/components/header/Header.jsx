import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Nav } from 'react-bootstrap'
import "./Header.css"
import { Link } from 'react-router-dom'



function Header({btnShow,icon}) {

  return (
    <>
    
    <Nav className='d-flex justify-content-between align-items-center  shadow rounded p-4'>
      <div className="logo">
        <h3 className=''>PixelPerfect</h3>
      </div>
      {btnShow&&<div className="midile d-flex gap-5">
        <h6><Link to={'./'}>Home</Link></h6>
        <h6>About Us</h6>
        <h6><Link to={'./gallery'}>Gallery</Link></h6>
        <h6>Contacts</h6>
      </div>}

       <div className="nav-btn d-flex gap-2 align-items-center">

        { btnShow && <button  className='btn btn-info rounded-4'><Link to={'/login'}>Get Started</Link></button>}
        { icon&&<Link to={'./dashboard'}><button className='rounded-5 border-0 shadow me-5' style={{width:"50px",height:"50px",backgroundColor:"red"}}>  </button></Link>}
        
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