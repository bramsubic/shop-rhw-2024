import React from "react";
import './Process.css';
import { Container, Row, Col } from 'react-bootstrap';

function Process() {
    // Define an array of steps with their respective information
    const steps = [
        {
            title: "Browse & Select",
            description: "Choose your favorite eggs from our farm-fresh selection"
        },
        {
            title: "Pick Your Date",
            description: "Select your preferred delivery date that fits your schedule"
        },
        {
            title: "Doorstep Delivery",
            description: "Receive your order right at your doorstep, hassle-free"
        },
        {
            title: "Cook & Enjoy",
            description: "Enjoy cooking with our premium-quality eggs!"
        }
    ];

    return (
        <div className="processContainer">
            <div className="d-flex justify-content-center align-items-center">
                <div className="headerContainer">
                    <div className="sectionHeader">HOW IT WORKS</div>
                </div>
            </div>
            <Container>
                <Row>
                    {steps.map((step, index) => (
                        <Col key={index} xs={12} md={6} lg={3} className="processTile">
                            <div className="text-center pb-4">Step {index + 1}</div>
                            <div className="text-center pb-3">{step.title}</div>
                            <div className="text-center">{step.description}</div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Process;
