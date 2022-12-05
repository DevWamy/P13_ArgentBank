import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { authActions } from '../store/authSlice';
import logo from '../img/argentBankLogo.png';

/**
 * Creation of a navigation component that includes the logo and navigation links.
 *
 * @params navLink allows to navigate through links.
 * @params useSelector allows to be linked to a state present in the store, the component will be notified at each modification of the state to be re-rendered.
 * @params useDispatch returns a dispatch function allowing actions to be dispatched to the store's reducer.
 * @params dispatch takes the action as a parameter. This is returned by the execution of the corresponding function.
 * @params authActions is needed for the various slice actions that are in the store.
 *
 * @returns {JSX.Element} Navigation component
 */

const Header = () => {
    const firstName = useSelector((state) => state.firstName);

    // fonction logout
    const handleLogout = () => {
        const dispatch = useDispatch;

        // On appelle la fonction du reducer "logout" qui passera les données user à null
        dispatch(authActions.logout());
    };

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
                    <NavLink to="/" className="nav_link" onClick={handleLogout}>
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
