import React from 'react';
import './TypingText.css';

export default class TypingText extends React.Component {
    constructor(props) {
        super(props);
        this.delay = 350;
        this.cursorDelay = 1700;
        this.finalText = "dummy";

        // The text to display and the delay to addding new letters 
        if (props.text) this.finalText = props.text;
        if (props.delay) this.delay = props.delay;
        if (props.cursorDelay) this.cursorDelay = props.cursorDelay;

        this.state = { currText: "", cursorStyle: {} };
        this.interval = setInterval(_ => this.typeText(), this.delay)
    }

    typeText() {
        // Get the current text onscreen
        let currText = this.state.currText;
        
        // Add a letter if we need to, else just remove interval and start the animation
        if (currText.length < this.finalText.length) {
            currText += this.finalText[currText.length];
            this.setState({ currText: currText });
        } else {
            clearInterval(this.interval);
            this.setState({cursorStyle: {
                animation: `blink ${this.cursorDelay}ms step-start infinite`
            }});
        }
    }

    render() {
        return (
            <div>
                {this.state.currText}
                <span className={"blinking-cursor"} style={this.state.cursorStyle}>_</span>
            </div>
        );
    }
}