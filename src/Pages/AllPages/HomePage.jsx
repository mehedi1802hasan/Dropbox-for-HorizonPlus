import React from 'react';
import HomeBanner from '../Components/HomeBanner';
import WhatDoDropbox from '../Components/WhatDoDropbox';
import BetaProduct from '../Components/BetaProduct';
import HowUseDropbox from '../Components/HowUseDropbox';

const HomePage = () => {
    return (
        <div className='bg-[#1E1919] text-white'>
            <HomeBanner></HomeBanner>
            <WhatDoDropbox></WhatDoDropbox>
            <BetaProduct></BetaProduct>
            <HowUseDropbox></HowUseDropbox>
        </div>
    );
};

export default HomePage;