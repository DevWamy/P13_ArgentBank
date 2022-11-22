import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../img/argentBankLogo.png';
import { FaUserCircle } from 'react-icons/fa';

/**
 * Creation of the navigation barre
 *
 * @returns {JSX.Element} Navigation component
 */

const Header = () => {
    return (
        <div className="nav">
            <NavLink className="nav_logo" to="/">
                <img className="nav_logo_image" src={logo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <Link to="/loginPage" className="nav_item">
                <div className="nav_item">
                    <FaUserCircle className="fa" />
                    Sign In
                </div>
            </Link>
        </div>
    );
};

export default Header;
