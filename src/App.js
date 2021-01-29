// Components
import React from 'react';
import Project from "./Project.js";
import NameCard from './NameCard.js';
import Particles from './Particles.js';
import PageIndicator from './PageIndicator.js';
import ReactPageScroller from 'react-page-scroller';

// Images
import eruditProject from "./img/erudit.vialab.ca.png";
import citationGalaxies from "./img/Citation Galaxies.png";
import svgPenSketch from "./img/svg-pen-sketch.png";

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
    <NameCard key="page-1" className="page-grid" />,
    <Project key="page-2" className="page-grid"
      imageUrl={eruditProject}
      imgTitle={"Érudit Landing Page"}
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
    />,
    <Project key="page-3" className="page-grid"
      imageUrl={citationGalaxies}
      imgTitle={"Citation Galaxies"}
      projectDesc={"CO.SHS Project | A web application to view, and markup, citations and their surrounding context"}
      projectLinks={[
        {
          href: "https://github.com/vialab/Citation-Galaxies",
          text: "Github"
        },
        {
          href: "https://citation.vialab.ca/",
          text: "Site"
        }
      ]}
    />,
    <Project key="page-4" className="page-grid"
      imageUrl={svgPenSketch}
      imgTitle={"svgPenSketch"}
      projectDesc={"An easy-to-use JavaScript library aimed at making it easier to draw on SVG elements"}
      projectLinks={[
        {
          href: "https://github.com/Desousak/svg-pen-sketch",
          text: "Github"
        },
        {
          href: "https://www.npmjs.com/package/svg-pen-sketch",
          text: "NPM"
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