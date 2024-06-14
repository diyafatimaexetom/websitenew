import React from 'react';
import ContactSec from '../../components/contact/contactsection';
import Footer from "../../components/landing/footer/footer";
import SignupNew from "../../components/landing/signup/signupnew";

const Section = ({ children }) => {
    return (<div className="catalog-section">{children}</div>);
}

const Contact = () => {
    return (
        <div className='w-full'>
            <ContactSec/>
            <SignupNew/>
            <Footer/>
     </div>
    );
}

export default Contact;
