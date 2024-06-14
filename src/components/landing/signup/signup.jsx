import React from 'react';
import '../../../scss/signup.scss'
const Signup = () => {
    return (
        <div className="signup-container">
            <h2 className="signup-title">Stay Updated</h2>
            <div className="signup-form">
                <input 
                    type="email" 
                    placeholder="Want to keep up with our latest products? Enter your email."
                    className="signup-input"
                />
                <button className="signup-button">Sign Up</button>
            </div>
            
        </div>
    );
}

export default Signup;
