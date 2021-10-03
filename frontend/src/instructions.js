import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./instructions.css"
function Instructions() {
  return (
    <Container fluid className="instructions" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
             <h1 style={{ fontSize: "2.2em" }}>
             About Us
            </h1> 

            <p className="home-about-body" >
            Hello! We're Anh, Anirudh, Arnav, Simran. We're freshman CS Majors at the University of Massachusetts, Amherst near Boston.
    
            <br />
            <br />
            When we read that blah blah we were passionate on working on Down2Earth.
            <br />
            <br />
        

            </p>
          </Col>
        </Row>
        <Row>
          
        </Row>
      </Container>
    </Container>
  );
}
export default Instructions;