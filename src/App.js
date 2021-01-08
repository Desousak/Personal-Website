// Components
import React from 'react';
import Page from "./Page.js";
import Project from "./Project.js";
import NameCard from './NameCard.js';
import Particles from './Particles.js';
import PageIndicator from './PageIndicator.js';
import ReactPageScroller from 'react-page-scroller';

// Images
import eruditProject from "./img/erudit.vialab.ca.png";

// Style sheets
import './App.css';
import './Page.css'
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

  // The content to fill within the app, each entry is treated as a page
  let content = [
    <NameCard className="page-grid" />,
    <Project className="page-grid"
      imageUrl={eruditProject}
      projectDesc={"The landing page for the various projects created as a part of the CO.SHS project"}
      projectLinks={[
        {
          href: "https://github.com/vialab/Erudit-Vialab-LandingPage",
          text: "Github"
        },
        {
          href: "https://erudit.vialab.ca/",
          text: "Site"
        }
      ]}
    />
  ];


  return (
    <div id="app">
      <div id="scroll-wrapper">
        <ReactPageScroller onBeforePageScroll={handlePageChange}>
          {content}
        </ReactPageScroller>
      </div>
      <PageIndicator ref={pageIndicator} init={0} amnt={content.length} />
      <div id="background-wrapper">
        <Particles />
      </div>
    </div>
  );
}

export default App;