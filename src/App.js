// Components
import React from 'react';
import NameCard from './NameCard.js';
import Particles from './Particles.js';
import AOS from 'aos';

// Style sheets
import './App.css';
import 'aos/dist/aos.css';

function App() {
  // Prep animation library
  AOS.init({
    duration: 1500,
    delay: 125,
    once: false,
    mirror: true
  });

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