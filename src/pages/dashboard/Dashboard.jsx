import React, { useState } from 'react'
import Header from '../../components/header/Header'
import { Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglass1, faHouse, faImage, faPhone,faUpload } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Card from '../../components/Card/Card'



function Dashboard() {
  const style={
    textDecoration:"none",
  }

  const [file, setFile] = useState()
  const handleUpload =(e) =>{
    console.log(file);
  }


  return (
    <>
      <Header btnShow={false} icon={true} />

      <div className="container-fluid p-5 bg-dark text-light">
        <Row className='d-flex justify-content-center gap-5  '>

          <Col className='border rounded-2 border-info shadow p-5 justify-content-center align-items-center d-flex' md={3}>

            <div className='justify-content-center align-items-center d-flex flex-column ' style={{cursor:"pointer"}}>
              <Link style={style} className='text-light' to={'/'}><p><FontAwesomeIcon icon={faHouse} style={{color: "#ffffff",}} className='px-2'/> Home</p></Link>

              <Link style={style} className='text-light' to={'/gallery'}><p><FontAwesomeIcon icon={faImage} style={{color: "#ffffff",}} className='px-2' />Gallery</p></Link>

              <p><FontAwesomeIcon icon={faPhone} style={{color: "#ffffff",}} className='px-2' />Contacts</p>

              <Link style={style} className='text-light' to={'/'}><p>Logout</p></Link>

            </div>
          </Col>
        
          <Col className='border rounded-2 border-info shadow p-5 justify-content-center  d-flex' md={5}>
          
            <Card/>
          
          </Col>
          
         
          <Col className='border rounded-2 border-info shadow p-5 justify-content-center  d-flex' md={3}>

          <FontAwesomeIcon icon={faUpload} style={{color: "#ffffff",fontSize:'50px',cursor:'pointer'}} />

          <input type="file" onChange={e=> setFile(e.target.files[0])}/>

          <button onClick={handleUpload} >upload</button>
          </Col>


        </Row>
      </div>
        
    
    </>
  )
}

export default Dashboard