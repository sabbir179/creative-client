import React from 'react';
import './Feedback.css';
const Feedback = (props) => {
    const {img,name,designation ,comment} = props.feedback;
    return (
        <div className="card shadow-sm">
            <div className="card-footer d-flex  align-items-center">
                <img className="mx-3" src={img} alt="" width="60"/>
                    <div>
                        <h5 className="text-primary">{name}</h5>
                        <p className="m-0">  <small>{designation}</small> </p>
                    </div>
                </div>
            <div className="card-body">
                <p className="card-text "> <small> {comment} </small> </p>
            </div>
            
            
       </div>
    );
};

export default Feedback;