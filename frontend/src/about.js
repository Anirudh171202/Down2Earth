import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./instructions.css"
function About() {
  return (
    <Container fluid className="about" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
             <h1 style={{ fontSize: "2em" }}>
            Importance of River Ganga
            </h1> 
            <br />
            <br />

            <p className="home-about-body" >
            Ganga is the biggest sacred water body which flows through both India and Bangladesh, originating in the Himalyas, Uttrakhand. 
            <br />
            <br />
            

            Within India, the river passes through 5 states: Uttar Pradesh, Uttarakhand, Bihar, Jharkhand, and West Bengal. Ganga not only holds religious value (as it symbolizes Hindu deity as well as), but also has historical significance.
            <br /> <br />
            Being the longest water body in India, it is an important source of water supply for the many Indians living in that area and the cities the river flows through.
            <br />  <br />
             The water supply from Ganga and its basin has helped develop and sustain ancient civilizations, and continues to do so - from agriculture (irrigation and fishing) to daily activities (such as bathing), Ganga plays a vital role in helping communities survive.
             
             <br /> <br /> In other words, Ganga is considered as the “lifeline” of India.
            </p>
          </Col>
        </Row>
        <Row>
          
        </Row>
      </Container>
    </Container>
  );
}
export default About;