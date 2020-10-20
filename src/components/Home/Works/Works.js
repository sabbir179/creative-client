import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/swiper.scss'; 
import slide1 from '../../../images/carousel-1.png';
import slide2 from '../../../images/carousel-2.png';
import slide3 from '../../../images/carousel-3.png';
// import slide4 from '../../../images/carousel-4.png';
// import Carousel from 'react-bootstrap/Carousel'
import './Works.css'

let slides = [
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

    // <img  src="../../../images/carousel-1.png" alt="1" />,
    // <img  src="../../../images/carousel-2.png" alt="2" />  ,
    // <img  src="../../../images/carousel-3.png" alt="3" />  ,
    // <img  src="../../../images/carousel-4.png" alt="4" />  
    
];

const Works = () => {
    return (
        
        <section className="work" >
            <div  >

                    <div>
                        <h3 className="text-center text-white py-5">Here are some of <span style={{color: '#7AB259'}}>our works</span></h3>
                    </div>
                    
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={3}
                                navigation
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                                >
                                {slides.map(slide => (
                                <SwiperSlide key={slide.id}>
                                    <div>
                                        {slide.pic}
                                    </div>
                                </SwiperSlide>) )}
                            </Swiper>
                    
            </div>


        </section>
    );
};

export default Works;