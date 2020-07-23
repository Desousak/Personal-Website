import React from 'react';
import './App.css';
import './Name-Page.css';
import Carousel from "./Carousel.js";
import Page from './Page.js';
// import TitlePage from './TitlePage.js'

function App() {
  return (
    <div id="app">
      <Carousel>
        <Page id="Name-Page">
          <div id="Name-Container">
            <div id="Name">Kevin Desousa</div>
            <div id="Title">Researcher</div>
            <hr className="Divison"></hr>
            <div id="Bio">I'm a graduate Computer Science student at Ontario Tech University with a passion for visualizations, human-computer interaction, machine learning, and anything web-related.</div>
          </div>
        </Page>
        <Page />
      </Carousel>
    </div>
  );
}

export default App;