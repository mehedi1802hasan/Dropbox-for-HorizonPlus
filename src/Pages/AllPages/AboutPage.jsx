import React from 'react';
import AboutPageBanner from '../Components/AboutPageBanner';
import OurStory from '../Components/OurStory';
import OurTeam from '../Components/OurTeam';

const AboutPage = () => {
    return (
        <div className='py-7'>
            <AboutPageBanner></AboutPageBanner>
            <OurStory></OurStory>
            <OurTeam></OurTeam>
        </div>
    );
};

export default AboutPage;