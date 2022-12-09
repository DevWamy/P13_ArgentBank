import React from 'react';

/**
 * Creation of the home banner with an image and desciption.
 *
 * @returns {JSX.Element} Banner component.
 */
const Banner = () => {
    return (
        <div className="hero">
            <section className="heroContent">
                <p className="subtitle">No fees.</p>
                <p className="subtitle">No minimum deposit.</p>
                <p className="subtitle">High interest rates.</p>
                <p className="text">Open a savings account with Argent Bank today!</p>
            </section>
        </div>
    );
};

export default Banner;
