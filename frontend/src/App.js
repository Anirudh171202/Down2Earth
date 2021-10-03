import clean from './clean.jpeg';
import polluted from './polluted.jpeg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div> 
        <img src={polluted}   className="gallery-grid" style={{}} alt="logo" />
        <img src={clean}   className="gallery-grid" style={{}} alt="logo" />
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
      </header>
    </div>
  );
}

export default App;
