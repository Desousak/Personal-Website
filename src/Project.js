import React from 'react';
import './Project.css';

class Project extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="project">
                <img className="project-banner" src={this.props.imageUrl}/>
                <div className="project-desc">{this.props.projectDesc}</div>
                {this.props.children}
            </div>
        );
    }
}

export default Project;