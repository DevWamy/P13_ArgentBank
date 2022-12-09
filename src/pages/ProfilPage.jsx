import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authActions } from '../store/authSlice';
import AccountItem from '../components/AccountItem';

/**
 * Display the profile page with account elements and access to edit form.
 *
 * @params useSelector allows to extract data from the state of the store, using a selection function.
 * Used here to extract datas that are in the first and last name state.
 * @params useDispatch returns a dispatch function allowing actions to be dispatched to the store's reducer.
 * @params useState is used to store data.
 * @params authActions is needed for the various slice actions that are in the store.
 * @params navigate is used for navigate to other pages.
 * @params e.preventDefault removes the default behavior of the element in which it is called.
 * @params axios is used to do some requests.
 * @params charAt toUpperCase is used to have the first letter of the name and first name capitalized.
 *
 * @returns {JSX.Element} Profile page.
 */
const Profil = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //On récupère le token
    const token = useSelector((state) => state.token);

    // Si il n'y a pas de token = pas d'user => on redirige verse la page login
    useEffect(() => {
        if (!token) {
            navigate('/LoginPage');
        }
    }, [token, navigate]);

    //Edition du formulaire
    const [editNameForm, setEditNameForm] = useState(false);
    const editForm = (e) => {
        e.preventDefault();
        setEditNameForm(!editNameForm);
    };

    //Form values
    const [updateFirstName, setUpdateFirstName] = useState('');
    const [updateLastName, setUpdateLastName] = useState('');

    const onSave = (e) => {
        e.preventDefault();

        // Requete post pour envoyer le nom et prenom
        axios
            .put(
                'http://localhost:3001/api/v1/user/profile',
                {
                    // l'api attend un firstname et lastname on lui passe ceux des champs du formulaire
                    firstName: updateFirstName,
                    lastName: updateLastName,
                },
                // On modifie les autorisations avec le token.
                { headers: { Authorization: `Bearer ${token}` } },
            )
            //useSelector recup token meme chose que bearers.
            .then((response) => {
                // on appelle la fonction "updateUser" du user reducer qui change le nom / prenom
                dispatch(authActions.updateUser(response.data.body));
                setEditNameForm();
            });

        const updateUser = {
            firstName: updateFirstName ? updateFirstName : firstName,
            lastName: updateLastName ? updateLastName : lastName,
        };
        console.log(updateUser);
    };

    const firstName = useSelector(
        (state) => state.firstName && state.firstName.charAt(0).toUpperCase() + state.firstName.slice(1),
    );

    const lastName = useSelector(
        (state) => state.lastName && state.lastName.charAt(0).toUpperCase() + state.lastName.slice(1),
    );

    return (
        <div className="main bgDark">
            <div className="accountHeader">
                <h1>Welcome back</h1>
                {editNameForm ? (
                    <form className="userForm">
                        <div className="inputWrapper">
                            <label htmlFor="firstName"></label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder={firstName}
                                required
                                onChange={(e) => setUpdateFirstName(e.target.value)}
                            />
                            <label htmlFor="lastName"></label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder={lastName}
                                required
                                onChange={(e) => setUpdateLastName(e.target.value)}
                            />
                        </div>

                        <div className="userButtons">
                            <button className="btn" type="submit" onClick={onSave}>
                                Save
                            </button>
                            <button className="btn" type="submit" onClick={editForm}>
                                Cancel
                            </button>
                        </div>
                    </form>
                ) : (
                    <div>
                        <h2>{firstName + ' ' + lastName + '!'}</h2>
                        <button className="editButton" onClick={editForm}>
                            Edit Name
                        </button>
                    </div>
                )}
            </div>
            <h2 className="sr-only">Accounts</h2>
            <AccountItem
                title="Argent Bank Checking (x8349)"
                amount="$2,082.79"
                description="Available Balance"
            />
            <AccountItem
                title="Argent Bank Savings (x6712)"
                amount="$10,928.42"
                description="Available Balance"
            />
            <AccountItem
                title="Argent Bank Credit Card (x8349)"
                amount="$184.30"
                description="Current Balance"
            />
        </div>
    );
};

export default Profil;
