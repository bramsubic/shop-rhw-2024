import React from "react";
import "./Hero.css";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';


function Hero() {
  return (
    <div className="heroContainer">
      <video className="heroVideo" autoPlay muted loop>
        <source src="examplemove.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="heroContent">
      <Container>
        <Row>
          <Col>
            <div><h1 className="instrument-serif-regular heroText pb-4">High-quality meals start with us! <br/> Enjoy pasture-raised eggs, <br /> delivered to your door</h1></div>
            <Button variant="link" className="heroLink inria-serif-bold">Place an Order</Button>

          </Col>
        </Row>
        </Container>
      </div>
    </div>
  );
}

export default Hero;