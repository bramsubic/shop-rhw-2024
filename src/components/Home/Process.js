import React from "react";
import './Process.css'
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
        <Col>
        Step 1
        </Col>
        <Col>
        Step 2
        </Col>
        <Col>
        Step 1
        </Col>
      </Row>
      </Container>
        </div>
        
    )
}

export default Process;