import React from 'react';
import Nash from '../../../images/customer-1.png';
import Miriam from '../../../images/customer-2.png';
import Bria from '../../../images/customer-3.png';
import Feedback from '../Feedback/Feedback';
import './ClientFeedback.css'
const feedbackData = [
    {
        img: Nash,
        name:'Nash Patrik',
        designation: 'CEO, Manpal',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas alias pariatur quod aperiam magni atque.'
    },
    {
        img: Miriam,
        name:'Miriam Barron',
        designation: 'CEO, Manpal',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas alias pariatur quod aperiam magni atque.'
    },
    {
        img: Bria,
        name:'Bria Malone',
        designation: 'CEO, Manpal',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas alias pariatur quod aperiam magni atque.'
    }
];


const ClientFeedback = () => {
    return (
        <section className="feedback my-5 py-5">
            <div className="text-center">
                
                <h3 className="text">Clients <strong className="service-text">Feedback</strong></h3>
            </div>
            <div className="d-flex justify-content-center">
                <div  className="card-deck mt-5 ">
                    {
                        feedbackData.map(feedback => <Feedback feedback={feedback} key={feedback.name} ></Feedback> )
                    } 
                </div>
        </div>
        </section>
    );
};

export default ClientFeedback;