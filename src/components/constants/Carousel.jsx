import React, { useState } from 'react';

import { CarouselItem } from '../constants';
import { TechBroItems } from './TechBroItems';
import { ReactComponent as ControlIco } from '../../assets/slidecontrol.svg';

import '../css/Carousel.css';

const Carousel = () => {
    const [left, setLeft] = useState(0);
    const [center, setCenter] = useState(1);
    const [right, setRight] = useState(2);
    const length = TechBroItems.length;

    const nextSlide = () => {
        setLeft(left === length - 1 ? 0 : left + 1);
        setCenter(center === length - 1 ? 0 : center + 1);
        setRight(right === length - 1 ? 0 : right + 1);
    };

    const prevSlide = () => {
        setLeft(left === 0 ? length - 1 : left - 1);
        setCenter(center === 0 ? length - 1 : center - 1);
        setRight(right === 0 ? length - 1 : right - 1);
    };

    return(
        <div className="Carousel">
            <ControlIco onClick={prevSlide}/>
            <CarouselItem id={TechBroItems[left]} className="cornerslides"/>
            <CarouselItem className="centerslide" id={TechBroItems[center]}/>
            <CarouselItem id={TechBroItems[right]} className="cornerslides"/>
            <ControlIco id="rightcontrol" onClick={nextSlide}/>
        </div>
    )
}

export default Carousel;

