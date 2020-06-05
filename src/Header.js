import React from 'react';
import './Header.css';

import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaEnvelope, FaBriefcase } from 'react-icons/fa';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <div id="Name-container">
                    <h1 className="Name">Kevin</h1>
                    <h1 className="Name">Desousa</h1>
                    <div className="Social">
                        <a href="https://github.com/Desousak"><FaGithub size={32} /></a>
                        <a href="https://www.linkedin.com/in/kevin-desousa-909989170"><FaLinkedin size={32} /></a>
                        <a href="https://www.instagram.com/kevindesousa3/"><FaInstagram size={32} /></a>
                        <a href="https://twitter.com/KevinDesousa6/"><FaTwitter size={32} /></a>
                        <a href="mailto:kevin.desousa1@ontariotechu.net"><FaEnvelope size={32} /></a>
                        <a href="http://vialab.science.uoit.ca/portfolio/kevin-desousa"><FaBriefcase size={32} /></a>
                    </div>
                </div>
                <div id="Bio-container">
                    <p className="Bio">I'm a graduate Computer Science student at Ontario Tech University with a passion for visualizations, human-computer interaction, machine learning, and anything web-related.</p>
                </div>
            </header>
        );
    }
}