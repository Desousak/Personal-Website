import React, { createRef } from 'react';
import "./Projects.css";
import Card from "./Card.js";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

export default class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.project_ele = createRef(null); // Used to add and remove event listeners
        this.state = { offsetX: 0, icon: "Grab-stop", animate: "" };

        // Used to calculate the movementX variable (not available on some devices)
        this.past_event = null;

        // Set the bounds for the cards
        this.scroll_limits = { min: 0, max: -1 };
        this.updateBounds();

        // If the window resizes and the scrollbar is moved out of bounds, fix it 
        window.addEventListener('resize', _ => {
            this.updateBounds();
            this.fixScroll();
        });
    }

    updateBounds = _ => {
        // Get the size needed for all elements scroll area
        let card_size = 315;
        let card_amnt = 5;
        let card_space = card_size * card_amnt;

        // Get the available page width 
        let page_width_string = getComputedStyle(document.documentElement).getPropertyValue("--page-width");
        let page_width;

        // Calculate the width if the style has a percent
        if (page_width_string.includes("%")) {
            page_width = window.innerWidth * (parseInt(page_width_string, 10) / 100);
        } else {
            page_width = parseInt(page_width_string, 10);
        }

        // Set the scroll limit
        this.scroll_limits.max = -1 * (card_space - (page_width));
    }

    startScroll = _ => {
        this.project_ele.current.addEventListener("pointermove", this.handleScroll);
        this.setState({ icon: "Grab-start", animate: "" });
    }

    fixScroll = _ => {
        // If the user scrolls to far
        let new_offset = this.state.offsetX;
        if (new_offset > this.scroll_limits.min) {
            new_offset = this.scroll_limits.min;
        } else if (new_offset < this.scroll_limits.max) {
            new_offset = this.scroll_limits.max;
        }

        if (new_offset !== this.state.offsetX) {
            this.setState({ animate: "Animate", icon: "Grab-start", offsetX: new_offset });
        }
    }

    stopScroll = _ => {
        this.fixScroll();
        this.past_event = null;
        this.project_ele.current.removeEventListener("pointermove", this.handleScroll);
        this.setState({ icon: "Grab-stop" });
    }

    handleScroll = (event) => {
        if (this.past_event != null) {
            let movementX = event.clientX - this.past_event.clientX;
            let new_offset = this.state.offsetX + movementX;
            this.setState({ offsetX: new_offset });
        }
        this.past_event = event;
    }

    manualScroll = (amount) => {
        let new_offset = this.state.offsetX + amount;
        this.setState({ animate: "Animate", offsetX: new_offset }, this.stopScroll);
    }

    render() {
        return (
            <div className="Grabber" >
                <div id="Projects"
                    className={`${this.state.icon} ${this.state.animate}`}
                    style={
                        { transform: `translate(${this.state.offsetX}px, 0px)` }
                    }
                    ref={this.project_ele}
                    onPointerDown={this.startScroll}
                    onPointerUp={this.stopScroll}
                    onPointerLeave={this.stopScroll} >
                    <Card title="Citation Context Surfer"
                        background="linear-gradient(-45deg, rgb(42, 42, 59), rgb(0, 51, 160))" />
                    <Card title="Érudit + Vialab"
                        background="#ff4242" />
                    <Card title="YT Companion"
                        background="linear-gradient(-90deg, #DC5B45, #C32A43, #56253A)" />
                    <Card title="Soccer Toybox"
                        background="linear-gradient(-60deg, #263143, #325155, #809E7C)" />
                    <Card title="Concurrent-KNN"
                        background="linear-gradient(-0deg, #A44747, #D69876, #BAA57F)" />
                </div>

                <div className="Grab-controls" >
                    <button className="Right-scroll"
                        onClick={
                            () => this.manualScroll(-250)
                        } > < FaAngleRight />
                    </button>
                    <button className="Left-scroll"
                        onClick={
                            () => this.manualScroll(250)
                        } > < FaAngleLeft />
                    </button>
                </div>
            </div>

        );
    }
}