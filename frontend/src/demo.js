import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./demo.css"
import img from "./graph.png"
// import Particle from "../Particle";
// import Type from "./type";
// import AOS from "aos"
// import Home2 from "./about"
// import "aos/dist/aos.css"
// import Resume from "./resume"
// import Projects from "./projects";
let current_time= new Date();
let year = current_time.getFullYear();


// const Component = React.createClass({
//     iframe: function () {
//       return {
//         __html: this.props.iframe
//       }
//     },
  
//     render: function() {
//       return (
//         <div>
//           <div dangerouslySetInnerHTML={ this.iframe() } />
//         </div>
//       );
//     }
//   });
  
//   const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4360735.8878401555!2d81.0299203612351!3d26.991558037182113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1633271735977!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'; 
  
function Home(props) {
  return (
     
    <section>
         <div>{props.children}</div>
      <Container fluid className="demobg" id="home">
       
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ padding: 35, fontSize: "80px", color: "white" }} className="heading">
               Demo
              </h1>

              
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4360735.8878401555!2d81.0299203612351!3d26.991558037182113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1633271735977!5m2!1sen!2sus" width="600" height="450"  allowfullscreen="" loading="lazy"></iframe>

 <br />
 
<br />

                <img src = {img} />
                <h2 style={{color: "white"}}> Predicting water quality of the Ganga water using Machine Learning Data from NASA GRACE </h2>
              <div style={{ padding: "120px", fontSize: "25px", color: "white"}}>
                <br />
                
                 The above data shows the Equivalent Water Thickness (a great way to measure underground water reserves) from the year 2002 to 2021. Based on this data, we have found a line of best fit for the data from Aug 2021 to Aug 2023. While these predictions may not be 100% accurate, they provide us with a proof of concept for other regions and more time, with refinement we can get much better predictions and make use of this data.
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 50 }}>
              
            </Col>
          </Row>
         
        </Container>
       </Container>
      <Container fluid className="home-section2"><div
    
  >
    <Container  fluid className="home-section" id="about"><Row></Row></Container></div></Container>
  
  {/* <Resume /></div>
  <Projects /> */}

  {/* <h5 style={{margin:"auto", color: "#ffffff", padding:"50px"}}>Anirudh Sathiya© {year}</h5> */}
  </section>
   
  );
}

export default Home;