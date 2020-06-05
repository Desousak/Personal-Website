import React from 'react';
import './Extras.css';

export default class Extas extends React.Component {
    render() {
        return (
            <div id="Extras">
                <div id="Skills">
                    <h2>Skills</h2>
                    <div className="Skill-group">
                        <h4 className="Skill-title">Technologies</h4>
                        <ul>
                            <li>NodeJS</li>
                            <li>ReactJS</li>
                            <li>MongoDB</li>
                            <li>Tensorflow</li>
                            <li>D3</li>
                            <li>Pug</li>
                        </ul>
                    </div>
                    <div className="Skill-group">
                        <h4 className="Skill-title">Languages</h4>
                        <ul>
                            <li>Javascript</li>
                            <li>C / C++</li>
                            <li>Python</li>
                            <li>Java</li>
                            <li>Clojure</li>
                        </ul>
                    </div>
                </div>
                <div id="Interests">
                    <h2>Interests</h2>
                    <div className="Interests-group">
                        <ul>
                            <li>Computers <span role="img" aria-label="computer">🖥️</span></li>
                            <li>Music <span role="img" aria-label="headphones">🎧</span></li>
                            <li>Video / Board Games <span role="img" aria-label="controller">🎮</span></li>
                            <li>Photography  <span role="img" aria-label="camera">📷</span></li>
                        </ul>
                    </div>

                </div>
                <div id="Acknowledgements">
                    <h2>Acknowledgements</h2>
                    <p>The general layout for this site was inspired by <a href="https://nick.computer">nick.computer</a></p>
                    <p>Icons used are sourced from <a href="https://fontawesome.com/">FontAwesome Icons</a></p>
                </div>
            </div>
        );
    }
}