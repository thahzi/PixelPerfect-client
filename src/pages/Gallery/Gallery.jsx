import React from 'react'
import Card from '../../components/Card/Card'
import { Col, Row } from 'react-bootstrap'
import Header from '../../components/header/Header'



function Gallery() {
  return (
    <>
    <Header btnShow={true}/>
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