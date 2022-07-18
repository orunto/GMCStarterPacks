import React from "react";

import '../css/Carousel.css';

const CarouselItem = (props) => {
    return (
        <div className={props.className} id={props.id} style={props.style}></div>
    )
}

export default CarouselItem;