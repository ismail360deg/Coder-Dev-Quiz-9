import React from 'react';
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom';

const layouts = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default layouts;