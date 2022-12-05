import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/authSlice';

/**
 * Creation of the login form for the signIn page.
 * @params useSelector allows to be linked to a state present in the store, the component will be notified at each modification of the state to be re-rendered.
 * @params useDispatch returns a dispatch function allowing actions to be dispatched to the store's reducer.
 * @params dispatch takes the action as a parameter. This is returned by the execution of the corresponding function.
 * @params authActions is needed for the various slice actions that are in the store.
 * @params navigate is used for navigate to other pages.
 * @params e.preventDefault removes the default behavior of the element in which it is called.
 * @params axios is used to do some requests.
 *
 * @returns {JSX.Element} LoginForm component
 */

const LoginForm = () => {
    const API_URL = 'http://localhost:3001/api/v1/user/';
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.querySelector('#email').value;
        const password = form.querySelector('#password').value;

        // requete post pour envoyer le mail et mdp
        axios
            .post(API_URL + 'login', {
                // L'api attend un email et un password on lui passe ceux des champs du formulaire
                email,
                password,
            })
            .then((response) => {
<<<<<<< HEAD
                // On modifie les autorisations avec le token. DEFINITION A REVOIR
                // axios.defaults.headers['Authorization'] = `Bearer ${response.data.body.token}`;
=======
                // On modifie les autorisations avec le token.
                axios.defaults.headers['Authorization'] = `Bearer ${response.data.body.token}`;
>>>>>>> e1c1d47eb0b9cfc1fe36dd15b679fa828fc72782

                // On récupère le token
                dispatch(authActions.setToken(response.data.body));

                // requete pour récuperer les données de l'utilisateur
<<<<<<< HEAD
                axios
                    .post(
                        'http://localhost:3001/api/v1/user/profile',
                        {},
                        // On modifie les autorisations avec le token. DEFINITION A REVOIR
                        { headers: { Authorization: `Bearer ${response.data.body.token}` } },
                    )
                    .then((response) => {
                        // on appelle la fonction "login" du user reducer
                        dispatch(authActions.login(response.data.body));

                        // on redirige sur la page profil
                        navigate('/ProfilPage');

                        //On affiche le token
                        console.log('Voici le token: ' + localStorage.userToken);
                    });
=======
                axios.post('http://localhost:3001/api/v1/user/profile').then((response) => {
                    // on appelle la fonction "login" du user reducer
                    dispatch(authActions.login(response.data.body));

                    // on redirige sur la page profil
                    navigate('/ProfilPage');

                    //On affiche le token
                    console.log('Voici le token: ' + localStorage.userToken);
                });
>>>>>>> e1c1d47eb0b9cfc1fe36dd15b679fa828fc72782
            })
            .catch((err) => {
                alert(err.response.data.message);
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
