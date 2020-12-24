// Components
import React from 'react';
import NameCard from './NameCard.js';
import Particles from './Particles.js';

// Style sheets
import './App.css';
import './screen-sizes.css'

function App() {
  // TEMP SOLUTION TODO: REPLACE THIS
  // Disable the warn messages
  console.warn = () => {};

  return (
    <div id="app">
      <div id="grid-wrapper">
        <NameCard />
      </div>
      <div id="background-wrapper">
        <Particles />
      </div>
    </div>
  );
}

export default App;