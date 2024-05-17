import React from 'react';
import HomeBanner from '../Components/HomeBanner';
import WhatDoDropbox from '../Components/WhatDoDropbox';
import BetaProduct from '../Components/BetaProduct';

const HomePage = () => {
    return (
        <div className='bg-[#1E1919] text-white'>
            <HomeBanner></HomeBanner>
            <WhatDoDropbox></WhatDoDropbox>
            <BetaProduct></BetaProduct>
        </div>
    );
};

export default HomePage;