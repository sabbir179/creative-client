import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './WorkCarousel.css';

const WorkCarousel = ({slide}) => {
    return (
        <div className="carouselCard">
          <img id="work-carousel" src={slide.pic} className="img-fluid w-100 " alt=""/>
        </div>
    );
};

export default WorkCarousel;