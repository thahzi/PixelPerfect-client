import React from 'react'
import Card from '../../components/Card/Card'
import { Col, Row } from 'react-bootstrap'



function Gallery() {
  return (
    <>
    <div className=" m-5 p-5">
        <Row>
            <Col md={3} sm={12}><Card
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