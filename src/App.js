import React from 'react';
import './App.css';
import Carousel from "./Carousel.js";
import Page from './Page.js';

function App() {
  return (
    <div id="app">
      <Carousel>
        <Page/>
        <Page/>
        <Page/>
      </Carousel>
    </div>
  );
}

export default App;