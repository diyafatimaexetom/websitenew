import React, { useEffect, useState } from 'react';
import LOGO from "../../assets/logo.png";
import Container from '../container/container';
import { Outlet, Link } from 'react-router-dom';
import SearchComponent from '../../components/landing/search/SearchComponent';

const BaseComponent = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        if (active) {
            document.body.classList.add('prevent-scroll');
        } else {
            document.body.classList.remove('prevent-scroll');
        }
        return () => {
            document.body.classList.remove('prevent-scroll');
        };
    }, [active]);

    return (
        <div className={`w-full base-container overflow-x-hidden ${active ? 'overflow-hidden' : ''}`}>
            <Container>
                <nav className="base-navbar">
                    <div className="base-inner-container">
                        <a href="#"><img src={LOGO} alt="logo-image" className="nav-logo" /></a>
                        <div className='base-items'>
                            <ul className='base-ul'>
                                <li className='base-list-component'><Link to="/catalog">CATALOG</Link></li>
                                <li className='base-list-component'><Link to="/contact">CONTACT</Link></li>
                            </ul>
                        </div>
                        <SearchComponent />
                    </div>
                </nav>
            </Container>
            <Outlet />
        </div>
    );
}

export default BaseComponent;
