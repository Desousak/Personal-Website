// Components
import React from 'react';
import Carousel from "./Carousel.js";
import NamePage from './NamePage.js';
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
      <Carousel>
        <NamePage />
        <p data-aos="fade-right"
          data-aos-anchor-placement="top-center">Test1</p>
        <p data-aos="fade-right"
          data-aos-anchor-placement="top-center">Test2</p>
        {/* <Page id="Name-Page">
          <div id="Name-Container">
            <div id="Name">Kevin Desousa</div>
            <div id="Title">Researcher</div>
            <hr className="Divison"></hr>
            <div id="Bio">I'm a graduate Computer Science student at Ontario Tech University with a passion for visualizations, human-computer interaction, machine learning, and anything web-related.</div>
          </div>
        </Page> */}
      </Carousel>
    </div>
  );
}

export default App;