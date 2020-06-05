import React from 'react';
import './App.css';
import Header from './Header.js';
import Projects from './Projects.js';
import Extras from './Extras.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Projects />
      <Extras />
      


      {/* <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
