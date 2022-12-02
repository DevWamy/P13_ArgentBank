import React from 'react';
import { useSelector } from 'react-redux';
import AccountItem from '../components/AccountItem';

/**
 * Display the profile page with account elements and access to edit form.
 * @params useSelector allows to extract data from the state of the store, using a selection function.
Used here to extract datas that are in the first and last name state.
 * @params charAt toUpperCase is used to have the first letter of the name and first name capitalized.
 *
 * @returns {JSX.Element} Profile component
 */
const Profil = () => {
    const firstName = useSelector(
        (state) => state.firstName.charAt(0).toUpperCase() + state.firstName.slice(1),
    );

    const lastName = useSelector((state) => state.lastName.charAt(0).toUpperCase() + state.lastName.slice(1));

    console.log(firstName);
    console.log(lastName);

    return (
        <div className="main bgDark">
            <div className="accountHeader">
                <h1>
                    Welcome back
                    <br />
                    {firstName} {lastName}!
                </h1>
                <button className="editButton">Edit Name</button>
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
