import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./instructions.css"
function Solution() {
  return (
    <Container fluid className="about" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
             <h1 style={{ fontSize: "2em" }}>
            Our Solution
            </h1> 
            <br />
            <br />

            <p className="home-about-body" >
            We developed a machine learning model which predicts the water equivalent thickness of various geographical areas (defined by the GRACE satellite) and provides a better understanding of the locations of underground water supplies and their usability as an alternative to the polluted Ganga River.
            </p>
          </Col>
        </Row>
        <Row>
          
        </Row>
      </Container>
    </Container>
  );
}
export default Solution;