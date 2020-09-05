import React from 'react';
import './NamePage.css';

export default class NamePage extends React.Component {
    render() {
        return (
            <div id="Name-Container">
                <div data-aos="zoom-in-right">
                    <div id="Name">Kevin Desousa</div>
                    <div id="Title">Researcher</div>
                    <hr className="Divison"></hr>
                    <div id="Bio">I'm a graduate Computer Science student at Ontario Tech University with a passion for visualizations, human-computer interaction, machine learning, and anything web-related.</div>
                </div>
                
                <img id="Pfp" data-aos="zoom-in-right" src="https://picsum.photos/200"></img>
            </div>
        );
    }
}