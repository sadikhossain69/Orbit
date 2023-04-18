import React from 'react';
import Navbar from '../common/navbar/Navbar';
import Footer from '../common/footer/Footer';

const GlobalLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default GlobalLayout;