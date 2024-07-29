import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'



function Footer() {
  return (
    <>
    
  <div className="  footer w-100 p-5 mt-5">
    
    
    
    
    <Row className='d-flex justify-content-center align-items-center mx-5 p-5'>
      
      <Col sm={12} md={4}> 
        <h3 className='text-light ' id='aboutus'>About us</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, nam voluptates voluptas esse fuga non totam obcaecati delectus, aut dolores neque iste quo cumque provident similique officia eveniet ducimus id!</p> 
        <div className="icons w-50 mt-3 fs-1 d-flex justify-content-between align-items-center">
        <FontAwesomeIcon icon={faGithub} style={{color: "#ffffff",}} />
        <FontAwesomeIcon icon={faFacebook} style={{color: "#ffffff",}} />
        <FontAwesomeIcon icon={faTwitter} style={{color: "#ffffff",}} />
        </div>
      </Col>
      <Col sm={12} md={4}>
        <h3>links</h3>
      </Col>
      <Col sm={12} md={4}>  </Col>
     
    </Row>
  </div>
    
    </>
  )
}

export default Footer