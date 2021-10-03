import React,{useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./cards.css"
// import ModalVideo from 'react-modal-video'
// import "../../../node_modules/react-modal-video/css/modal-video.css"
import { scryRenderedDOMComponentsWithClass } from "react-dom/cjs/react-dom-test-utils.development";
// import {
//   AiFillPlayCircle
// } from "react-icons/ai";

let card_css = { width: '200px', height: '200px' , backgroundColor:"#f00cff"}
class Projects extends React.Component {

  constructor () {
    super()
    this.state = {
      isOpen1: false,
      isOpen2: false,
      isOpen3: false
    }
    // this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }

  render () {
    return(<Container id="projects"><Row><h1 style={{color:"#000000", padding:"20px", fontSize:"60px"}}>The Problem :  </h1></Row> <Row><h2 style={{color:"#3c3d3d"}}>(Tap on the cards for more)</h2></Row>
    <div className="container-cards">

    <div className="card">
      <div className="face face1">
        <div className="content">
          <span className="stars"></span>
        
          <br />
          <br />
         
          <br />
          <br />
          <p className="java" style= {{fontSize:"2em"}}> people rely on water from Gangetic Plains of India </p >
   
        </div>
      </div>
      <div className="face face2">
      <h2 className="java">650 Million People</h2>
      </div>
    </div>
  
    <div className="card">
      <div className="face face1">
        <div className="content">
          <span className="stars"></span>
          <h2 className="python"></h2>
          <br />
          <br />
         
          <br />
          <br />
          <p className="python" style= {{fontSize:"2em"}}> depend on water from Ganges and Indus for their livelihoods.</p>
        </div>
      </div>
      <div className="face face2">
        <h2>129 million farmers</h2>
      </div>
    </div>
  
    <div className="card">
      <div className="face face1">
        <div className="content">
          <span className="stars"></span>
          <h2 className="cSharp"></h2>
          <br />
          <br />
         
          <br />
          <br />
          <p className="cSharp" style= {{fontSize:"2em"}}>Die From water-borne diseases every year due to the pollution in the Ganges river.
</p> 
        </div>
      </div>
      <div className="face face2">
        <h2>1.5 Million Children</h2>
      </div>
    </div>
  </div>
  </Container>
    )
    
  }
}


export default Projects;