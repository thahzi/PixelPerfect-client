import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from '../../components/Card/Card'
import './About.css'
import { faHourglass1 } from '@fortawesome/free-solid-svg-icons'

function About() {

    const card ={
        fontSize:'50px'
    }
  return (

    

    <>
    
        <div className=" mt-5 shadow p-5" style={{backgroundColor:"#3384A5",color:"white"}}>
            <div className='container my-5'>
                {/* Row one */}
                <Row className=''>
                    <Col md={1} sm={12}></Col>
                    <Col md={4} sm={12} ><Card imageUrl="https://img.freepik.com/free-photo/account-verification-with-password-3d-padlock_107791-16181.jpg?t=st=1722066136~exp=1722069736~hmac=9459049731ba63a1c18da760c83b78340407c712b24cf558924aee7c0a95b118&w=1060" /></Col>
                    <Col md={1} sm={12}></Col>

                    <Col md={1} sm={12}></Col>
                    <Col md={4} sm={12} className='d-flex flex-column justify-content-center align-items-center p-2 '>
                        <h3 className='text-light'>Register now </h3>
                        <p  className='text-light text-center'>to access our exclusive photography gallery and immerse yourself in stunning, high-quality images  start sharing your photos with our friendly community </p>
                    </Col>
                    <Col md={1} sm={12}></Col>
                </Row>   

                    {/* Row two */}
                <Row className='mt-5'>

                    <Col md={1} sm={12}></Col>
                    <Col md={4} sm={12} className='d-flex flex-column justify-content-center align-items-center p-2 '>
                        <h3 className='text-light'>Upload your portfolio</h3>
                        <p className='text-light text-center'>Showcase your talent! Upload your photography portfolio and share your stunning shots with a global audience </p>
                    </Col>
                    <Col md={1} sm={12}></Col>

                    <Col md={1} sm={12}></Col>
                    <Col md={4} sm={12} ><Card style={card} imageUrl="https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/60107f1edb030306c7b92be1_6002086f72b727f73b01e459_jasmine.jpeg " /></Col>
                    <Col md={1} sm={12}></Col>
                </Row>  
                    {/* Row three */}
                 <Row className='mt-5'>
                    <Col md={1} sm={12}></Col>
                    <Col md={4} sm={12} ><Card imageUrl="https://img.freepik.com/free-photo/close-up-finger-pressing-virtual-button_1112-493.jpg?t=st=1722085657~exp=1722089257~hmac=d117962126baa64369b6f0bf88e2b00ec82b582a5f56f0e1f35ef143e95ccf93&w=1380"/></Col>
                    <Col md={1} sm={12}></Col>

                    <Col md={1} sm={12}></Col>
                    <Col md={4} sm={12} className='d-flex flex-column justify-content-center align-items-center p-2 '>
                        <h3 className='text-light'>Upload your photos</h3>
                        <p className='text-light text-center'>Our platform is designed to highlight your stunning shots and connect you with fellow photography enthusiasts from around the world </p>
                    </Col>
                    <Col md={1} sm={12}></Col>
                </Row>    
                    {/* Row four */}
                <Row className='mt-5'>

                    <Col md={1} sm={12}></Col>
                    <Col md={4} sm={12} className='d-flex flex-column justify-content-center align-items-center p-2 '>
                        <h3 className='text-light'>Upload your </h3>
                        <p className='text-light text-center'>Showcase your talent! Upload your photography portfolio and share your stunning shots with a global audience </p>
                    </Col>
                    <Col md={1} sm={12}></Col>

                    <Col md={1} sm={12}></Col>
                    <Col md={4} sm={12} ><Card imageUrl="https://img.freepik.com/free-photo/account-verification-with-password-3d-padlock_107791-16181.jpg?t=st=1722066136~exp=1722069736~hmac=9459049731ba63a1c18da760c83b78340407c712b24cf558924aee7c0a95b118&w=1060"/></Col>
                    <Col md={1} sm={12}></Col>
                </Row>  

                
            </div>
        </div>
    
    </>
  )
}

export default About