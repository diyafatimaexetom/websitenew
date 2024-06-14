import React, { useEffect, useState } from 'react';
import Container from '../../container/container';

const Partners = () => {
    const [shaded, setShaded] = useState(false);
;

    

    return (
        <div className={`${shaded ? 'bg-[#1a0b1a] ' : ''}w-full background-animation`} id='partners'>
        <div className="bgimg">
            
            
                <div className="partners-upper-container back-img">
                
                <div className="partners-bottom-container">
                    <div data-aos="fade-up-right" className='w-full'>
                        <div className={`${shaded ? 'text-[#FFA12B]' : 'text-[#880DB4]'} title`}>Lorem Ipsum Dolor Sit Amet</div>
                    </div>
                    <div data-aos="fade-up-right" className='w-full'>
                        <div className={`${shaded ? "text-white" : "text-black"} paragraph`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    </div>
                    <div data-aos="fade-up-right" className='w-full'>
                        <div className={`${shaded ? "text-black" : "text-white"}`}><button className="button" type="button">View More</button></div>
                    </div>
                    
                </div>
                </div>
                
            </div>  
            </div>
       )
}

export default Partners