import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import './Navbar.css';
import logo from '../../assets/logo.png';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 590);
        };

        handleResize(); // Check initial size
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="nav">
            <div className="logo">
                <img src={logo} alt='not found!' className='img-logo' />
            </div>
            {isMobile ? (
                <button className="menu-btn" onClick={toggleMenu}>
                    <GiHamburgerMenu />
                </button>
            ) : (
                <div className="btn-nav">
                    <button className='get-project'>Get Project</button>
                    <button className='on-board'>Onboard Talent</button>
                </div>
            )}
            {showMenu && isMobile && (
                <div className="btn-nav">
                    <button className='get-project'>Get Project</button>
                    <button className='on-board'>Onboard Talent</button>
                </div>
            )}
        </div>
    );
}

export default Navbar;
