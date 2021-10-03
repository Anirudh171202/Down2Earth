import clean from './clean.jpeg';
import polluted from './polluted.jpeg'
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link, useRouteMatch, useParams} from "react-router-dom";
import Instructions from "./instructions";
import About from "./about"
import Projects from "./cards"
import Home from "./demo"
import Solution from "./solution"
function App2() {
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
                        }} >Down2Earth <br /> <Link to="/demo" ><button className="button-top"><a href="/demo" >View Demo</a></button></Link></div>
                         
        </div>
       
        <a
          className="App-link"
          href="https://"
          target="_blank"
          rel="noopener noreferrer"
        >
          a
        </a>
        <About />
        <Projects />
        <Solution />
         <Instructions />
         

        <Switch>
          
          <Route exact path="/demo" component={Home}></Route>
           

        </Switch>
     
    </div>
    </Router>
  );
}

export default App2;
