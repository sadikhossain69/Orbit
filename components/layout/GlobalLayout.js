import React from 'react';
import Navbar from '../common/navbar/Navbar';

const GlobalLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default GlobalLayout;