import React from "react";
import Card from "../Card/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Col, Row } from "react-bootstrap";



function Silder() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Row >
        <Col md={1}></Col>
        <Col  md={3} className="justify-content-start align-items-center d-flex pt-5 ">
          <div  style={{lineHeight:'35px'}}>
            <p style={{fontSize:"1.5rem",color:"#4E7789"}}>Photographer's</p>
            <p style={{fontSize:"5rem",color:"#3384A5"}}>Portfolio</p>
          </div>
        </Col>
        <Col md={8} sm={12} >
          <Carousel  responsive={responsive} className="mt-5 " >
            
            
            <div  className="p-3" style={{height:"12rem"}} ><Card imageUrl="https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/60107f1edb030306c7b92be1_6002086f72b727f73b01e459_jasmine.jpeg " /></div>
    
            <div className="p-3" style={{height:"1rem"}} ><Card imageUrl="https://visualcomposer.com/wp-content/uploads/2019/07/whizz1.jpg"/></div>
    
    
            <div className="p-3" style={{height:"1rem"}}><Card imageUrl="https://media.greatbigphotographyworld.com/wp-content/uploads/2022/04/adobe-portfolio-website-for-photography-1024x504.jpg"/></div>
    
            <div className="p-3" style={{height:"1rem"}}><Card imageUrl="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2023/08/image-1.jpeg"/></div>
    
            <div className="p-3" style={{height:"1rem"}}><Card imageUrl="https://s.tmimgcdn.com/scr/800x500/57600/photographer-portfolio-website-template_57646-0-original.jpg"/></div>
            
            
          </Carousel>
        </Col>
      </Row>
     
    </>
  );
}

export default Silder;
