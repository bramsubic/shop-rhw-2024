import React from "react";
import "./Hero.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';

function Hero() {
  return (
    <div className="heroContainer d-flex justify-content-center align-items-center">
          <Container>
      <Row>
        <Col>
          <div><h1>Welcome <br/> to Egg Master</h1></div>
          <div className="pt-5"><h2>Our mission is simple: to deliver top-quality eggs while nurturing our communities. Through sustainable practices and a passion for wholesome food, we're redefining excellence one egg at a time.</h2></div>
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <div className="imgContainer">

          </div>
        </Col>
      </Row>
      </Container>
    </div>
  );
}

export default Hero;
