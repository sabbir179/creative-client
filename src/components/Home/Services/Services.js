import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import "./Services.css";
import service1 from '../../../images/icons/service1.png';
import service2 from '../../../images/icons/service2.png';
import service3 from '../../../images/icons/service3.png';



const infosData = [
    {
        img: service1,
        title: 'Web & Mobile design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quidem commodi pariatur!'
        
    },
    {
        img: service2,
        title: 'Graphic design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos saepe tempora tempore optio aperiam ducimus?'
        
    },
    {
        img: service3,
        title: 'Web development',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni incidunt nam aliquam itaque ipsam beatae maxime et pariatur excepturi unde!'
        
    }
]


const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                
                <h3 className="text">Provide awesome <strong className="service-text">service</strong></h3>
            </div>
            <div className="d-flex justify-content-center">
            <div  className="w-75 row mt-5 pt-5">
                {
                    infosData.map(service => <InfoCard service={service} key={service.name}></InfoCard>)
                }
            </div>
        </div>
        </section>
       
    );
};

export default Services;