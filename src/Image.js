import React, { useState } from 'react';
import Lightbox from "react-awesome-lightbox";

import './Image.css';
import "react-awesome-lightbox/build/style.css";

// Prevent the pop-up from scrolling the page
function preventScroll(e) {
    e.stopPropagation();
}

function Image(props) {
    const [isImageClicked, setIsImageClicked] = useState(false);

    // Open the modal for the image
    let clickImage = _ => {
        setIsImageClicked(true);

        // Disable body scroll
        document.querySelector("#scroll-wrapper > div").addEventListener("wheel", preventScroll, true);
        document.querySelector("#scroll-wrapper > div").addEventListener("touchmove", preventScroll, true);

    }

    // Hide the model for the image
    let unClickImage = _ => {
        setIsImageClicked(false);

        // Re-enable body scroll
        document.querySelector("#scroll-wrapper > div").removeEventListener("wheel", preventScroll, true);
        document.querySelector("#scroll-wrapper > div").removeEventListener("touchmove", preventScroll, true);
    }

    return (
        isImageClicked ?
            <Lightbox image={props.imageUrl} onClose={unClickImage} title={props.imgTitle} />
            :
            <img alt={props.altText} src={props.imageUrl} onClick={clickImage} className={"img " + props.className} />
    )

}

export default Image;