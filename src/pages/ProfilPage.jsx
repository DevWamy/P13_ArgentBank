import React from 'react';
import AccountItem from '../components/AccountItem';

/**
 * Display the profile page with account elements and access to edit form
 *
 * @returns {JSX.Element} Profile component
 */
const Profil = () => {
    return (
        <div className="main bgDark">
            <div className="accountHeader">
                <h1 className="whiteTitle">Welcome back</h1>
                <div>
                    <h2 className="whiteTitle">Tony Jarvis !</h2>
                    <button className="editButton">Edit Name</button>
                </div>
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
