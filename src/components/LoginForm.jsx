import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

/**
 * Creation of the login form for the signIn page
 *
 * @returns {JSX.Element} LoginForm component
 */

const LoginForm = () => {
    const API_URL = 'http://localhost:3001/api/v1/user/';
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.querySelector('#email').value;
        const password = form.querySelector('#password').value;

        axios
            .post(API_URL + 'login', {
                email,
                password,
            })
            .then((response) => {
                if (response.data.body) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                    console.log('success');
                    navigate('/ProfilPage');
                }
                //else {
                //     <div className="error">
                //         <h1>ERREUR</h1>
                //         <h2> Nom d'utilisateur ou mot de passe incorrect!</h2>
                //     </div>;
                // }
            });
    };

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
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
