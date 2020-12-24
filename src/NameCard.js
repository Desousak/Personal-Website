import React from 'react';
import TypingText from "./TypingText.js";
import { FaGithub, FaLinkedin, /*FaInstagram, FaTwitter,*/ FaEnvelope, FaBriefcase, FaFilePdf } from 'react-icons/fa';
import './NameCard.css';

export default class NameCard extends React.Component {
    render() {
        return (
            <div id="name-card">
                <div id="personal-info">
                    <h1 id="name"><TypingText text="Kevin Desousa" delay={350} cursorDelay={1700} /></h1>
                    <p id="bio">
                        A graduate Computer Science student with a focus on Web Development, Visualizations, HCI, and Machine Learning.
                        <br />
                        Based in Oshawa, Ontario.
                    </p>
                </div>
                <ul id="links">
                    <li>
                        <a href="https://github.com/Desousak">
                            <FaGithub size={38} />
                            <div className="anchor-circle" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/kevin-desousa-909989170">
                            <FaLinkedin size={38} />
                            <div className="anchor-circle" />
                        </a>
                    </li>
                    {/* <li>
                        <a href="https://www.instagram.com/kevindesousa3/">
                            <FaInstagram size={38} />
                            <div className="anchor-circle" />
                        </a>
                    </li> */}
                    {/* <li>
                        <a href="https://twitter.com/KevinDesousa6/">
                            <FaTwitter size={38} />
                            <div className="anchor-circle" />
                        </a>
                    </li> */}
                    <li>
                        <a href="">
                            <FaFilePdf size={38} />
                            <div className="anchor-circle" />
                        </a>
                    </li>
                    <li>
                        <a href="http://vialab.science.uoit.ca/portfolio/kevin-desousa">
                            <FaBriefcase size={38} />
                            <div className="anchor-circle" />
                        </a>
                    </li>
                    <li>
                        <a href="mailto:kevin.desousa1@ontariotechu.net">
                            <FaEnvelope size={38} />
                            <div className="anchor-circle" />
                        </a>
                    </li>
                   
                </ul>
            </div>
        );
    }
}