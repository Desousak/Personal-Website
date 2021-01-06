// Components
import React from 'react';
import Project from "./Project.js";
import NameCard from './NameCard.js';
import Particles from './Particles.js';
import PageIndicator from './PageIndicator.js';
import ReactPageScroller from 'react-page-scroller';

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

  let childContent = [<NameCard />, <Project> <div>Test</div> <div>Test</div> </Project>];
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