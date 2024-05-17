import React from 'react';
import HomeBanner from '../Components/HomeBanner';
import WhatDoDropbox from '../Components/WhatDoDropbox';
import BetaProduct from '../Components/BetaProduct';
import HowUseDropbox from '../Components/HowUseDropbox';
import WhyChoiceUs from '../Components/WhyChoiceUs';
import GetStartDropbox from '../Components/GetStartDropbox';

const HomePage = () => {
    return (
        <div className='bg-[#1E1919] text-white'>
            <HomeBanner></HomeBanner>
            <WhatDoDropbox></WhatDoDropbox>
            <BetaProduct></BetaProduct>
            <HowUseDropbox></HowUseDropbox>
            <WhyChoiceUs></WhyChoiceUs>
            <GetStartDropbox></GetStartDropbox>
        </div>
    );
};

export default HomePage;