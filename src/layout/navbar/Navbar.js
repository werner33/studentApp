import React, {useState} from 'react';

import {
    NavLink,
  } from "react-router-dom";

import './Navbar.scss';

function Navbar(props) {

    const [navbarOpen, setNavbarOpen] = useState(false);

    const toggleNavBar = () => {
        setNavbarOpen(!navbarOpen);
    }

    return (
        <div className="navbar">
            <div className="navbar__logo">Logo Here</div>
            <nav 
                className={navbarOpen ? "navbar__menuItems navbar__menuItemsMobile": "navbar__menuItems"}
                onClick={() => setNavbarOpen(false) }
            >
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/about" >
                    About
                </NavLink>
                <NavLink to="/contact" >
                    Contact
                </NavLink>
            </nav>
            <div 
            className="navbar__menuItemOpener"
            onClick={() => toggleNavBar()}
            >
                =
            </div>
        </div>
    );
}

export default Navbar;