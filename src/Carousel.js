import React from 'react';
import './Carousel.css';
import PageIndicator from './PageIndicator.js';

class Carousel extends React.Component {
    constructor(props) {
        super();
        this._PageIndicator = React.createRef();
    }

    componentDidMount() {
        window.addEventListener("mousewheel", (e) => this._handleScroll(e));
        this._setPage(this._getPage());
    }

    // Get the page the user is currently on (useful when reloading the page)
    _getPage() {
        let pages = document.querySelectorAll("#Carousel-Pages > *");
        let index = 0;
        for (let page of pages) {
            let pageTop = page.getBoundingClientRect().top;
            if (pageTop === 0) return index;
            index += 1;
        }
    }

    // Change current page
    _handleScroll(e) {
        // Get scroll direction and scroll to that page
        let dir = e.deltaY / Math.abs(e.deltaY);
        this._scrollToPage(this.state.pagePos + dir);
    }

    // Scroll to a page (will update the current-page counter)
    _scrollToPage(index) {
        let pages = document.querySelectorAll("#Carousel-Pages > *");
        if (index >= 0 && index < pages.length) {
            // Get the desired page location and scroll to it 
            let page = pages[index];
            let pageTop = page.getBoundingClientRect().top + window.scrollY;

            window.scrollTo({
                top: pageTop,
                left: 0,
                behavior: 'smooth'
            });
            this._setPage(index);
        }
    }

    // Manually update the page counter
    _setPage(index) {
        // Remember the current page index and change the indicator
        this.setState({ pagePos: index });
        this._PageIndicator.current.setIndicator(index);
    }

    render() {
        return (
            <div id="Carousel">
                <div id="Carousel-Pages">
                    {this.props.children}
                </div>
                <PageIndicator ref={this._PageIndicator}
                    init={0} amnt={this.props.children.length} />
            </div>
        );
    }
}

export default Carousel;