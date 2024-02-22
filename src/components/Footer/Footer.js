import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Footer.css";

function ResponsiveAutoExample() {
  return (
    <div className="footerContainer pb-5">
      <Container>
        <Row>
          <Col xs={12} md={6} className="subscribeContainer">
            <div className="pb-4">Friends let friends know about fresh products and content.</div>
            
            <Form className="w-75">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Subscribe
              </Button>
            </Form>
          </Col>
          <Col xs={12} md={6} className="border">
            <Row>
              <Col>Shop</Col>
              <Col><div>About</div></Col>
              <Col>Social</Col>
            </Row>
            <Row>
              <Col></Col>
              <Col>
              <div>Eggcyclopedia</div>
              <div>Contact</div>
              </Col>
              <Col>
                <ListGroup defaultActiveKey="#link1">
                  <ListGroup.Item action href="#link1">
                    Instagram
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link2">
                    Facebook
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
          </Col>
          <Col xs={12} md={6} className="border d-flex justify-content-between align-items-end">
            <div>Terms of Use</div>
            <div>Privacy Policy</div>
            <div>© Egg Master 2024</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResponsiveAutoExample;
