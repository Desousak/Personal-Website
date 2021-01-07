// Components
import React from 'react';
import Project from "./Project.js";
import NameCard from './NameCard.js';
import Particles from './Particles.js';
import PageIndicator from './PageIndicator.js';
import ReactPageScroller from 'react-page-scroller';

// Images
import eruditProject from "./img/erudit.vialab.ca.png";

// Style sheets
import './App.css';
import './screen-sizes.css'

// Handle the different page numbers
let pageIndicator = React.createRef();
function handlePageChange(number) {
  pageIndicator.current.setIndicator(number);
}

function App() {
  // TEMP SOLUTION TODO: REPLACE THIS
  // Disable the warn messages
  console.warn = () => { };

  let childContent = [<NameCard />, 
                      <Project 
                        imageUrl={eruditProject}
                        projectDesc={[<p>The landing page for the various projects created as a part of the CO.SHS project</p>, <a href="">test</a>]} 
                      />];
  return (
    <div id="app">
      <div id="scroll-wrapper">
        <ReactPageScroller onBeforePageScroll={handlePageChange}>
          {childContent}
        </ReactPageScroller>
      </div>
      <PageIndicator ref={pageIndicator} init={0} amnt={childContent.length} />
      <div id="background-wrapper">
        <Particles />
      </div>
    </div>
  );
}

export default App;