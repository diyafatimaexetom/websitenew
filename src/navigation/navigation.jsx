import React from 'react';
import { Routes, Route } from "react-router-dom";
import BaseComponent from "../components/baseComponent/baseComponent";
import Landing from "../containers/landing/landing";
import Catalog from '../containers/catalog/catalog';
import Contact from '../containers/contact/contact'


const Navigation = () => {
  return (
    <Routes>
        <Route path="/" element={<BaseComponent />}>
            <Route index element={<Landing />} />
        <Route path="catalog" element={<Catalog />}/>
        <Route path="contact" element={<Contact />}/>
        </Route>
    </Routes>
  );
}

export default Navigation;
