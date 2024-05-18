import React from 'react';
import AboutPageBanner from '../Components/AboutPageBanner';
import OurStory from '../Components/OurStory';
import OurTeam from '../Components/OurTeam';
import BoardDirectors from '../Components/BoardDirectors';
import LatestNews from '../Components/LatestNews';

const AboutPage = () => {
    return (
        <div className='pt-7'>
            <AboutPageBanner></AboutPageBanner>
            <OurStory></OurStory>
            <OurTeam></OurTeam>
            <BoardDirectors></BoardDirectors>
            <LatestNews></LatestNews>
        </div>
    );
};

export default AboutPage;