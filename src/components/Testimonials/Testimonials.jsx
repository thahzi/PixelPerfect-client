import React, { useEffect } from "react";
import "./Testimonials.css";
import { Card, Col, Row } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";


function Testimonials() {

  useEffect(()=>{
    Aos.init();
  },[])

  return (
    <>
      <div className="container mt-5 p-5 shadow testBorder " data-aos="fade-down">
        
          <Row className=" justify-content-between align-items-center d-flex " style={{cursor:'pointerx'}}>
            <Col sm={12} md={4}>
              <Card style={{ width: "100%", border: "none" }} className="justify-content-between align-items-center d-flex" data-aos="fade-right" >
                <Card.Img
                  className="shadow "
                  variant="top"
                  src="https://globalventuring.com//content/uploads/2023/03/Sonam-Jain-landscape.png"
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                  }}
                />
                <Card.Body>
                  <Card.Text className="text-center">
                    The artistic photos on this site are one-of-a-kind. I love
                    how each piece tells a story and brings a unique vibe Highly
                    recommend for anyone
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>


            <Col sm={12} md={4}>
               <Card style={{ width: "100%", border: "none" }} className="justify-content-between align-items-center d-flex" data-aos="fade-up" >
                <Card.Img
                  className="shadow "
                  variant="top"
                  src="https://globalventuring.com//content/uploads/2023/03/Sonam-Jain-landscape.png"
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                  }}
                />
                <Card.Body>
                  <Card.Text className="text-center p-2">
                  The wildlife photos are breathtaking! The photographer's passion for nature shines through in every picture
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>



            <Col sm={12} md={4}>
            <Card style={{ width: "100%", border: "none" }} className="justify-content-between align-items-center d-flex" data-aos="fade-left" >
                <Card.Img
                  className="shadow "
                  variant="top"
                  src="https://globalventuring.com//content/uploads/2023/03/Sonam-Jain-landscape.png"
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                  }}
                />
                <Card.Body>
                  <Card.Text className="text-center p-2">
                  The travel photos are a window to the world. Each image tells a story and captures the spirit of the place
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>


          </Row>
        </div>

    </>
  );
}

export default Testimonials;
