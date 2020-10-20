import React from 'react';


import slide1 from '../../../images/carousel-1.png';
import slide2 from '../../../images/carousel-2.png';
import slide3 from '../../../images/carousel-3.png';
// import slide4 from '../../../images/carousel-4.png';
// import Carousel from 'react-bootstrap/Carousel'
import './Works.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Carousel from 'react-elastic-carousel';
import WorkCarousel from '../WorkCarousel/WorkCarousel';

let workSlides = [
    {
        id:1,
        pic: slide1
    },
    {
        id:2,
        pic: slide2
    },
    {
        id:3,
        pic: slide3
    }

     
    
];

const Works = () => {
    return (
        
        <section className="work py-5" >
            <div  >

                    <div>
                        <h3 className="text-center text-white py-5">Here are some of <span style={{color: '#7AB259'}}>our works</span></h3>
                    </div>
                    
                        <Carousel   itemsToShow={3} enableAutoPlay={true} >

                                {
                                    workSlides.map(slide => <WorkCarousel key={slide.id} slide={slide}></WorkCarousel> )
                                }
                        </Carousel>
            </div>


        </section>
    );
};

export default Works;