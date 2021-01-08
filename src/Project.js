import React from "react";
import "./Project.css";

export default class Project extends React.Component {
    constructor() {
        super();
    }

    render() {
        let links = this.props.projectLinks.map((param, index) => {
            return <li key={"project-link-"+index}><a className="project-link" href={param["href"]}>{param["text"]}</a></li>;
        });

        return (
            <div className={"project " + this.props.className} >
                <img src={this.props.imageUrl} className="project-img" />
                <div className="project-text">
                    {this.props.projectDesc}

                    <ul className="project-links">
                        {links}
                    </ul>
                </div>
            </div>
        )
    }
}