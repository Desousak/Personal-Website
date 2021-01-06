import React from 'react';
import './Project.css';

class Project extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="project">
                {this.props.children}
            </div>
        );
    }
}

export default Project;