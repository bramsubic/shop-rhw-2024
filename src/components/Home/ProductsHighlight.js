import React from "react";
import './Products.css'
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ProductsHighlight() {
    return(
        <div className="productsContainer">
            <div className="d-flex justify-content-center align-items-center">
            <div className="headerContainer"><h1 className="sectionHeader">PRODUCT SPOTLIGHT</h1></div></div>
            <Container>
      <Row>
        <Col>

        </Col>
        <Col>

        </Col>
        <Col>

        </Col>
      </Row>
      </Container>
        </div>
    )
}

export default ProductsHighlight;