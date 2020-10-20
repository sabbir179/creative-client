import React from 'react';
import './Contact.css';


const Contact = () => {
    return (
        <div className='contact-container row mb-5'>
            <div>
                <h3>Let us handle your <br/> project, professionally. </h3>
                <p className="py-4"> <small>  With well written codes, we build amazing apps for all <br/> platforms, mobile and web apps in general. </small></p>
            </div>
                 <div className="col-md-6 offset-md-1">
                 <form>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Your Email Address" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div className="form-group">
                                <input type="password" placeholder="Your Name/Company Name" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div className="form-group">
                            <textarea rows="6" placeholder="Your Message" className="form-control"></textarea>
                            </div>

                            <button type="submit" className="btn common-btn">Send</button>
                            </form>
                     </div>   
                
        </div>

       
    );
};

export default Contact;