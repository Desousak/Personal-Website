// Components
import React from 'react';
import NameCard from './NameCard.js';
import Particles from './Particles.js';
import PageIndicator from './PageIndicator.js';
import ReactPageScroller from 'react-page-scroller';

// Style sheets
import './App.css';
import './screen-sizes.css'

function getPageNumbers(children) {
  let pageNumbers = [];
  for (let i = 1; i <= children.length; i++) {
    pageNumbers.push(
      <div>
        Test
      </div>
    );
  }
  return [...pageNumbers];
};

let pageIndicator = React.createRef();
function handlePageChange(number) {
  pageIndicator.current.setIndicator(number);
}

function App() {
  // TEMP SOLUTION TODO: REPLACE THIS
  // Disable the warn messages
  console.warn = () => { };

  let childContent = [<NameCard />, <p>Test</p>, <div>p</div>];

  return (
    <div id="app">
      <div id="scroll-wrapper">
        <ReactPageScroller onBeforePageScroll={handlePageChange}>
          {childContent}
        </ReactPageScroller>
      </div>
      {/* <div id="pagenum-wrapper">
        1
      </div> */}
      <PageIndicator ref={pageIndicator} init={0} amnt={childContent.length} />
      <div id="background-wrapper">
        <Particles />
      </div>
    </div>
  );
}

export default App;