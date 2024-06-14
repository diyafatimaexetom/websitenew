import React from 'react';
import '../../../scss/signupnew.scss'
import LOGOT from "../../../assets/logo-transparent.png";


const SignupNew = () => {
    return (
        <div className="signupnew-bg">
            <div className='signupnew-logo'>
            <a href="#"><img src={LOGOT} alt="logo-image" className="nav-logo" /></a></div>
            <div className="signupnew-form">
                <input 
                    type="email" 
                    placeholder="Want to keep up with our latest products? Enter your email."
                    className="signupnew-input"
                />
                <button className="signupnew-button">Sign Up</button>
            </div>
            
        </div>
    );
}

export default SignupNew;
