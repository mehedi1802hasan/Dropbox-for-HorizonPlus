import React from 'react';
import AboutPageBanner from '../Components/AboutPageBanner';
import OurStory from '../Components/OurStory';

const AboutPage = () => {
    return (
        <div className='py-7'>
            <AboutPageBanner></AboutPageBanner>
            <OurStory></OurStory>
        </div>
    );
};

export default AboutPage;