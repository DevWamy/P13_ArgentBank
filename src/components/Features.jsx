import React from 'react';
import Feature from './FeatureItem';
import Chat from '../img/icon-chat.png';
import Money from '../img/icon-money.png';
import Security from '../img/icon-security.png';
import '../style/components/_features.scss';

/**
 * Creation of the features component
 *
 * @returns {JSX.Element}
 */
const Features = () => {
    return (
        <div className="features">
            <Feature
                image={Chat}
                title="You are our #1 priority"
                text="Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes"
            />
            <Feature
                image={Money}
                title="More savings means higher rates"
                text="The more you save with us, the higher your interest rate will be!"
            />
            <Feature
                image={Security}
                title="Security you can trust"
                text="We use top of the line encryption to make sure your data and money
            is always safe."
            />
        </div>
    );
};

export default Features;
