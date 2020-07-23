import React from 'react';
import './PageIndicator.css';

class PageIndicator extends React.Component {
    constructor(props) {
        super();
        this.state = { activePage: props.init };
    }

    // Set the indicator to a new spot
    setIndicator(index) {
        if (index >= 0 && index < document.querySelectorAll(".Page-Val").length)
            this.setState({ activePage: index });
    }

    render() {
        let pageIcons = [];
        for (let i = 0; i < this.props.amnt; i++) {
            let className = i === this.state.activePage ? " , Page-Filled" : "";
            pageIcons.push(<div className={"Page-Val" + className} key={i}></div>)
        }

        return (
            <div id="Page-Indicator">
                {pageIcons}
            </div>
        );
    }
}

export default PageIndicator;