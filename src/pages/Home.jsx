import React from 'react';
import Banner from '../components/Banner';
import Features from '../components/Features';

/**
 * Display the Home page with Banner and Features.
 *
 * @returns {JSX.Element} Home page.
 */

const Home = () => {
    return (
        <div className="main">
            <Banner />
            <Features />
        </div>
    );
};

export default Home;
