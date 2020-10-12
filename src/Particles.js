import React from 'react';
import ParticleField from 'react-particles-webgl';
import './Particles.css';

export default class Particles extends React.Component {
    constructor(props) {
        super(props);

        this.state = {config: this.getConfig()};
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', _ => {
            this.setState({config: this.getConfig()});
        });
    }

    getModeColors() {
        let darkMode = "#424242",
            lightMode = "#dbdbdb";
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return darkMode;
        }
        return lightMode;
    }

    getConfig() {
        let currMode = this.getModeColors();
        return {
            showCube: false,
            dimension: '3D',
            velocity: 1,
            boundaryType: 'bounce',
            antialias: false,
            direction: {
                xMin: -1,
                xMax: 1,
                yMin: -1,
                yMax: 1,
                zMin: -1,
                zMax: 1
            },
            lines: {
                colorMode: 'solid',
                color: currMode,
                transparency: 0.9,
                limitConnections: true,
                maxConnections: 20,
                minDistance: 150,
                visible: true
            },
            particles: {
                colorMode: 'solid',
                color: currMode,
                transparency: 0.9,
                shape: 'square',
                boundingBox: 'canvas',
                count: 250,
                minSize: 10,
                maxSize: 75,
                visible: true
            },
            cameraControls: {
                enabled: false,
            }
        }
    }

    render() {
        return (<ParticleField config={this.state.config} />);
    }
}