import React from "react";
import './Partners.css';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Partners() {
    const images = [
      "GrayRidge.jpg",
      "GrayRidge.jpg",
      "GrayRidge.jpg",
      "GrayRidge.jpg",
    ];

    // Mapping images to image components
    const imageItems = images.map((image, index) => (
      <Col key={index} xs={3} className="mb-3">
        <img className="img-fluid" src={image} alt={`Partner Farm ${index + 1}`} />
      </Col>
    ));

    return(
        <div className="partnersContainer">
           <h1 className="sectionHeader text-center">OUR PARTNER FARMS</h1>
           <Container>
             <Row>
               {imageItems}
             </Row>
           </Container>
        </div>
    )
}

export default Partners;



