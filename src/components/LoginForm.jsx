import React from 'react';

/**
 * Creation of the login form for the signIn page
 *
 * @returns {JSX.Element} LoginForm component
 */

const LoginForm = () => {
    return (
        <>
            <form className="form">
                <div className="inputWrapper">
                    <label htmlFor="email">Username</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className="inputWrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                </div>
                <div className="inputRemember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button className="signInButton" type="submit">
                    Sign In
                </button>
            </form>
        </>
    );
};

export default LoginForm;
