import React from 'react';
import './Page.css';

export default function Page(props) {
    return <div id={props.id} className={"Page"} >
        {props.children}
    </div>
}