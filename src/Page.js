import React from 'react';
import './Page.css';

class page extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="page">
                {this.props.children}
            </div>
        );
    }
}

export default page;