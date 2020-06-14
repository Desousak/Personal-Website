import React from 'react';
import "./Card.css";

export default class Card extends React.Component {
    getStyle() {
        let card_style = {};
        if (this.props.background) {
            card_style["background"] = this.props.background;
        } else {
            card_style["background"] = "white";
        }
        return card_style;
    }

    getCard() {
        return <button className="Card" style={this.getStyle()}>
            <h2 className="Card-title">{this.props.title}</h2>
        </button>;
    }

    render() {
        return this.getCard();
    }
}