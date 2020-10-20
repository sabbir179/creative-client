import React from 'react';
import MainHeader from './MainHeader/MainHeader';
import Navbar from './Navbar/Navbar';
import "./Header.css"
const Header = () => {
    return (
        <section className="container">
            <Navbar></Navbar>
            <MainHeader></MainHeader>
        </section>
    );
};

export default Header;