import React from 'react';
import Partners from '../../components/landing/partners/partners';
import TextSlider from "../../components/landing/textslider/TextSlider";
import HoverImageSection from "../../components/landing/homeimg/homeimg";
import TextSection from "../../components/landing/textsec/textsec";
import CollectionSec from "../../components/landing/collection/collectionsec";
import Footer from "../../components/landing/footer/footer";
import Signup from "../../components/landing/signup/signup";

const Section = ({ children }) => {
    return (<div className="landing-section">{children}</div>);
}

const Landing = () => {
    return (
        <div className='w-full'>
            <Partners/>
            <TextSlider />
            <HoverImageSection/>
            <TextSection/>
            <CollectionSec/>
            <Signup/>
            <Footer/>
     </div>
    );
}

export default Landing;
