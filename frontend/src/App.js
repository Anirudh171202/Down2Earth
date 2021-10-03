import clean from './clean.jpeg';
import polluted from './polluted.jpeg'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Instructions from "./instructions";
import About from "./about"
import Projects from "./cards"
function App() {
  return (
    <Router>
    <div className="App">
     
        <div> 
        <img src={polluted}   className="gallery-grid" style={{}} alt="logo" />
        <img src={clean}   className="gallery-grid" style={{}} alt="logo" />
        <div style={{
                          position: 'absolute', 
                          color: 'white', 
                          top: '21%', 
                          left: '50%', 
                          transform: 'translateX(-50%)',
                          fontSize: '120px'
                        }} >Down2Earth</div>
        </div>
       
        <a
          className="App-link"
          href="https://"
          target="_blank"
          rel="noopener noreferrer"
        >
          Map of the Ganga River Basin
        </a>
        <About />
        <Projects />
         <Instructions />
         
     
    </div>
    </Router>
  );
}

export default App;
