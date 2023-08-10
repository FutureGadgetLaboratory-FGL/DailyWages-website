import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

const Navbar = () => {
    return (
        <>
            <nav>
                <div className='container'>
                <img src="../../images/logo.jpg"/>

                <div className="navLinks">
                    <div>HOME</div>
                    <div>PROVIDE A SERVICE</div>
                    <div>WORKS & SERVICES</div>
                    <div>ACCOUNT</div>
                </div>

                <div className='navSearchBar'>

                </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;