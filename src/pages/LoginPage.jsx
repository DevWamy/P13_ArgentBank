import React from 'react';
import LoginForm from '../components/LoginForm';
import { FaUserCircle } from 'react-icons/fa';

/**
 * Display the login page with the login form.
 *
 * @returns {JSX.Element} Login page.
 */
const LoginPage = () => {
    return (
        <div className="bgDark main">
            <div className="signInContent">
                <FaUserCircle className="fa" />
                <h1>Sign In</h1>
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginPage;
