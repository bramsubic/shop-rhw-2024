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
      <Col key={index} className="d-flex justify-content-center">
        <img className="img-fluid imgPartner" src={image} alt={`Partner Farm ${index + 1}`} />
      </Col>
    ));

    return(
        <div className="partnersContainer">
           <h1 className="sectionHeader text-center">OUR PARTNER FARMS</h1>
           <Container>
            <div className="d-flex justify-content-center">
            <div className="imgCol w-50">
             <Row>
               {imageItems}
             </Row></div></div>
           </Container>
        </div>
    )
}

export default Partners;



