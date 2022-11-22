import React from 'react';
import image from '../img/bank-tree.jpeg';
// import HeroContent from './HeroContent';

/**
 * Creation of the home banner with an image and desciption
 * @component
 * @returns {JSX.Element} banner component
 */
const Banner = () => {
    return (
        <div className="hero">
            <img className="heroImg" src={image} alt="banner" />
            <section className="heroContent">
                <p className="subtitle">No fees.</p>
                <p className="subtitle">No minimum deposit.</p>
                <p className="subtitle">High interest rates.</p>
                <p className="text">Open a savings account with Argent Bank today!</p>
            </section>
            {/* <HeroContent subtitle="No fees." />
            <HeroContent subtitle="No minimum deposit." />
            <HeroContent subtitle="High interest rates." />
            <HeroContent text="Open a savings account with Argent Bank today!" /> */}
        </div>
    );
};

export default Banner;
