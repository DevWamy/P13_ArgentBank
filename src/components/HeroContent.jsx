import React from 'react';
import PropTypes from 'prop-types';
import '../style/components/_heroContent.scss';

/**
 * Creation of a feature item for the profile page
 *
 * @returns {JSX.Element} feature component
 */
const HeroContent = ({ subtitle, text }) => {
    return (
        <section className="heroContent">
            <p className="subtitle">{subtitle}</p>
            <p className="text">{text}</p>
        </section>
    );
};

export default HeroContent;

//Proptypes
HeroContent.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};
