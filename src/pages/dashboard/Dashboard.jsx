import React, { useState } from 'react'
import Header from '../../components/header/Header'
import { Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faImage, faPhone,faUpload } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Card from '../../components/Card/Card'
import './Dashboard.css'
import AddImg from '../../components/AddImg'



function Dashboard() {
  const style={
    textDecoration:"none",
  }

  


  return (
    <>
      <Header btnShow={false} icon={true} />

      <div className="container-fluid p-5 bg-dark text-light">
        <Row className='d-flex justify-content-center gap-5  '>

          <Col className='border rounded-2 border-info shadow p-5 justify-content-center align-items-center d-flex dashLeftbar' md={3}>

            <div className='justify-content-center align-items-center d-flex flex-column' style={{cursor:"pointer"}}>

              <Link to={'/'} className='mt-5'>
                <div className="wrapper">
                  <div className="button">
                    <div className="icon text-light"><FontAwesomeIcon icon={faHouse} /></div>
                    <span className='ps-4 text-light'>Home</span>
                  </div>
                </div>
              </Link>

              <Link to={'/gallery'} className='mt-5'>
                <div className="wrapper">
                  <div className="button">
                    <div className="icon text-light"><FontAwesomeIcon icon={faImage} /></div>
                    <span className='ps-4 text-light'>Gallery</span>
                  </div>
                </div>
              </Link>

              <Link to={'/'} className='mt-5'>
                <div className="wrapper">
                  <div className="button">
                    <div className="icon text-light"><FontAwesomeIcon icon={faPhone} /></div>
                    <span className='ps-4 text-light'>Home</span>
                  </div>
                </div>
              </Link>

              {/* <Link to={'/'}>
                <div className="wrapper">
                  <div className="button">
                    <div className="icon text-light"><FontAwesomeIcon icon={faHouse} /></div>
                    <span className='ps-4 text-light'>Home</span>
                  </div>
                </div>
              </Link> */}

            </div>
          </Col>
        
          <Col className='gap-5 middile row' md={5}>           
              <div className='column'>
                <Card imageUrl={'https://i.insider.com/625825fc8b169c0018f3682c?width=1136&format=jpeg'}/>
              </div>
              <div className='column'>
                <Card imageUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuhAWhhNO3P7lr6-Ay_vRGdOCribVm8kiePw&s"}/>
              </div>
              <div className='column'>
                <Card imageUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ylnvjVlZM7r2v9-wCXTaBhsp2mo_KZqWpA&s"}/>
              </div>
              <div className='column'>
                <Card imageUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlwVOpzDqxHjXY9Dnu5e--tBU1qCUxV1eEIv_PRvmsb8fIYdD2ysdgjPiaDVAdIXch9-I&usqp=CAU"}/>
              </div>
          </Col>
          
         
          <Col className='border rounded-2 border-info shadow p-5 justify-content-center  d-flex' md={3}>

            <AddImg/>
          </Col>


        </Row>
      </div>
        
    
    </>
  )
}

export default Dashboard