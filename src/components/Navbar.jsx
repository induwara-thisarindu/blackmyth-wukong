import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className={`nav ${isOpen ? "open" : ""}`}>
                <div className="logo">
                    <h1>BLACK MYTH WUKONG</h1>
                </div>
                <div className="links">
                    <ul>
                        <li><HashLink smooth to="/#home">Home</HashLink></li>
                        <li><HashLink smooth to="/#about">About</HashLink></li>
                        <li><HashLink smooth to="/#gallery">Gallery</HashLink></li>
                        <li><Link to="/review">Review</Link></li>
                    </ul>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
            <div className="color"></div>
        </>
    );
};

export default Navbar;




