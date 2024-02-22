import React from "react";
import './Process.css';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Process() {
    return(
        <div className="processContainer">
                <div className="d-flex justify-content-center align-items-center">
           <div className="headerContainer"><h1 className="sectionHeader">HOW IT WORKS</h1></div></div>
           <Container>
      <Row>
        <Col xs={12} md={6} lg={3} className="border">
        <div className="text-center pb-4">Step 1</div>
        <div className="text-center pb-3">Browse & Select</div>
        <div className="text-center">Choose your favorite eggs from our farm-fresh selection</div>
        </Col>
        <Col xs={12} md={6} lg={3} className="border">
        <div className="text-center pb-4">Step 2</div>
        <div className="text-center pb-3">Pick Your Date</div> 
        <div className="text-center">Select your preferred delivery date that fits your schedule</div>
        
        </Col>
        <Col xs={12} md={6} lg={3} className="border">
        <div className="text-center pb-4">Step 3</div>
        <div className="text-center pb-3">Doorstep Delivery</div> 
        <div className="text-center">Receive your order right at your doorstep, hassle-free</div>
        
        </Col>
        <Col xs={12} md={6} lg={3} className="border">
        <div className="text-center pb-4">Step 4</div>
        <div className="text-center pb-3">Cook & Enjoy</div> 
        <div className="text-center">Enjoy cooking with our premium-quality eggs!</div>
        
        </Col>
      </Row>
      </Container>
        </div>
        
    )
}

export default Process;