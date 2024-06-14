import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Outlet, Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Location</h4>
                    <p>9225 Leslie St, <br /> Richmond Hill, ON <br /> L4B 3H6</p>
                </div>
                <div className="footer-section">
                    <h4>Start a conversation</h4>
                    <p>info@agency.com <br /> +1 123 345 7899</p>
                </div>
                <div className="footer-section">
                    <h4>Lorem ipsum dolor</h4>
                    <p>
                    <Link to="/catalog">CATALOG</Link> <br />
                    <Link to="/contact">CONTACT</Link>
                    </p>
                </div>
                <div className="footer-section">
                    <div className="social-icons">
                        <a href="#" className='social-icon'><FaFacebookF /></a>
                        <a href="#" className='social-icon'><FaInstagram /></a>
                        <a href="#" className='social-icon'><FaTwitter /></a>
                        <a href="#" className='social-icon'><FaYoutube /></a>
                    </div>
                    <p>TERMS OF SERVICE PRIVACY</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 Company. All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
