import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import '../style/components/_header.scss';

/**
 * Creation of the navigation barre
 *
 * @returns {JSX.Element} Navigation component
 */

const Header = () => {
    return (
        <div className="nav">
            <NavLink className="nav_logo" to="/">
                <img className="nav_logo_image" src="./argentBankLogo.png" alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div className="nav_item">
                <div className="nav_item">
                    <FaUserCircle className="fa" />
                    Sign In
                </div>
            </div>
        </div>
    );
};

export default Header;
