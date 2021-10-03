import clean from './clean.jpeg';
import polluted from './polluted.jpeg'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


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
        <p>
          Hi
        </p>
        <a
          className="App-link"
          href="https://"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to cure ur life
        </a>
     
    </div>
    </Router>
  );
}

export default App;
