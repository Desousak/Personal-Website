import React from 'react';
import './PageIndicator.css';

class PageIndicator extends React.Component {
    constructor(props) {
        super();
        this.state = { activePage: props.init };
    }

    // Set the indicator to a new spot
    setIndicator(index) {
        if (index >= 0 && index < document.querySelectorAll(".page-val").length)
            this.setState({ activePage: index });
    }

    render() {
        return (
            <div id="page-indicators">
                {
                    [...Array(this.props.amnt)].map((e, i) =>
                        <a className={"page-val" + (i === this.state.activePage ? " page-filled" : "")}
                            key={i}></a>)
                }
            </div>
        );
    }
}

export default PageIndicator;