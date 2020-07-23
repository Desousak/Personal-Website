import React from 'react';
import './Page.css';
import { render } from '@testing-library/react';

export default function Page(props) {
    return (
        <div id={props.id} className={"Page"}>
            {props.children}
        </div>
    );
}