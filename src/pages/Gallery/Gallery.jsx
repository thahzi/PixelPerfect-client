import React from 'react'
import Card from '../../components/Card/Card'
import { Col, Row } from 'react-bootstrap'
import Header from '../../components/header/Header'
import { Link } from 'react-router-dom'



function Gallery() {
  return (
    <>
    <Header btnShow={true}/>
    <h5 className="GalleryTitle text-center mt-5" style={{}}>Access your <Link className='galleryLinkf' to={'/register'}>portal</Link> to share your visual stories</h5>
    <div className=" m-5 p-5">
        <Row>
            <Col md={3} sm={12}><Card
                imageUrl  
                title={<h1>fhugu</h1>}
                text={<p>fhugdfdu</p>}
            /></Col>
            <Col md={3} sm={12}><Card/></Col>
            <Col md={3} sm={12}><Card/></Col>
            <Col md={3} sm={12}><Card/></Col>
        </Row>
    </div>
        
    
    </>
  )
}

export default Gallery