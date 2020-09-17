import React from 'react';
import PageIndicator from './PageIndicator.js';
import Page from './Page.js';
import './Carousel.css';

class Carousel extends React.Component {
    constructor(props) {
        super();
        this._PageIndicator = React.createRef();
        this.state = {
            children: this._wrapChildren(props.children)
        }
    }

    componentDidMount() {
        // A variable used to stop the scrolling of pages
        this.stopScroll = false;
        window.addEventListener("mousewheel", (e) => this._handleScroll(e));
        window.addEventListener("resize", _ => this.scrollToPage(this.state.pagePos));
        this._setPageIndex(this._getPageIndex());
    }

    // Change current page
    _handleScroll(e) {
        // Get scroll direction and scroll to that page
        let dir = ((e.deltaY !== -0) ? e.deltaY / Math.abs(e.deltaY) : 0);
        if (!this.stopScroll) {
            this.scrollToPage(this.state.pagePos + dir);

            // Toggle the page scroll
            this.stopScroll = true;
            setTimeout(_ => {
                this.stopScroll = false;
            }, 500);
        }
    }

    // Scroll to a page (will update the current-page counter)
    scrollToPage(index) {
        let pages = document.querySelectorAll("#Carousel-Pages > *");
        if (index >= 0 && index < pages.length) {
            // Get the desired page and scroll to it 
            let page = pages[index];
            page.scrollIntoView({
                behavior: 'smooth'
            });
            this._setPageIndex(index);
        }
    }

    // Get the page the user is currently on (useful when reloading the page)
    _getPageIndex() {
        let pages = document.querySelectorAll("#Carousel-Pages > *");
        let index = 0;
        for (let page of pages) {
            let pageTop = page.getBoundingClientRect().top;
            if (pageTop === 0) return index;
            index += 1;
        }
    }

    // Manually update the page counter
    _setPageIndex(index) {
        // Remember the current page index and change the indicator
        this.setState({ pagePos: index });
        this._PageIndicator.current.setIndicator(index);
    }


    // Wrap each child in a page element
    _wrapChildren(children) {
        let tmp = [];
        React.Children.forEach(children, e => {
            tmp.push(<Page>{e}</Page>);
        })
        return tmp;
    }

    render() {
        return (
            <div id="Carousel">
                <div id="Carousel-Pages">
                    {this.state.children}
                </div>
                <PageIndicator ref={this._PageIndicator}
                    carousel={this} init={0} amnt={this.state.children.length} />
            </div>
        );
    }
}

export default Carousel;