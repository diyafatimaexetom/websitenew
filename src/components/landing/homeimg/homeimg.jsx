import React from 'react';
import '../../../scss/homeimg.scss'
import mainImage from '../../../assets/homeimg1.jpg'; 
import Image2 from '../../../assets/homeimg2.jpg';
import Image3 from '../../../assets/homeimg3.jpg';

const HoverImageSection = () => {
    return (
        <div className="image-section">
            <div className="main-image-container">
                <img src={mainImage} alt="Main" className="main-image" />
            </div>
            <div className="side-images">
                <div className="side-image-container">
                    <img src={Image2} alt="Side 1" className="side-image" />
                </div>
                <div className="side-image-container">
                    <img src={Image3} alt="Side 2" className="side-image" />
                </div>
            </div>
        </div>
    );
};

export default HoverImageSection;
