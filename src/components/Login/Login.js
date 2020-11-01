import React from 'react';
import google from '../../images/icons/googleIcon.png';
import logo1 from '../../images/logos/logo1.png';
import './Login.css';

const Login = () => {
    return (
        <div>
            <div className="login-container">
                <div className=" L text-center mt-5">
                    <img className="logo1" src={logo1} alt="" />
                </div>
                <div className="parentForm">
                    <h3 className="text-center mt-5">Login with</h3>
                    <div className="btnStyle d-flex justify-content-center">
                        {/* <button onClick={handleGoogleSignIn}><img className="img-fluid" src={google} alt="" /> */}
                        <button  ><img className="img-fluid" src={google} alt="" />Continue with Google</button>
                    </div>
                    <h6 className="text-center">Don't have an account? <a href="#">Create a new account</a></h6>
                </div>
            </div>
        </div>
    );
};

export default Login;