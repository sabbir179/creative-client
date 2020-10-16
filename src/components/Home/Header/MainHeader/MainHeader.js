import React from 'react';
import banner from '../../../../images/logos/Frame.png'
const MainHeader = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3A4256'}} > Let's Grow Your  <br/> Brand To The <br/> Next Level </h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ducimus esse, sit, consectetur culpa repellat explicabo e. </p>
                <button className="btn btn-dark">Hire us</button>
            </div>
            <div className="col-md-6">
                <img src={banner} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default MainHeader;