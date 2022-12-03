import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import logo from '../img/argentBankLogo.png';

/**
 * A REVOIR
 *
 * @returns {JSX.Element} Navigation component
 */

const Header = () => {
    const firstName = useSelector((state) => state.firstName);

    return (
        <div className="nav">
            <NavLink className="nav_logo" to="/">
                <img className="nav_logo_image" src={logo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            {firstName ? (
                <div className="nav_item">
                    <NavLink to="/ProfilPage" className="nav_link">
                        <div className="nav_item">
                            <FaUserCircle className="fa" />
                            <span>
                                {firstName} <br />{' '}
                            </span>
                        </div>
                    </NavLink>
                    <NavLink to="/" className="nav_link">
                        <div>
                            <FaSignOutAlt className="go" />
                            Sign Out
                        </div>
                    </NavLink>
                </div>
            ) : (
                <NavLink to="/loginPage" className="nav_link">
                    <div className="nav_item">
                        <FaUserCircle className="fa" />
                        Sign In
                    </div>
                </NavLink>
            )}
        </div>
    );
};

export default Header;
