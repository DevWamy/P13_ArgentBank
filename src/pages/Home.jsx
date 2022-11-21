import React from 'react';
import Banner from '../components/Banner';
import Features from '../components/Features';
import '../style/pages/_home.scss';

/**
 * Display the Home page with Banner and Features
 *
 * @returns {JSX.Element} Home component
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