import React from 'react';
import blogPagebannerPhoto from '../../assets/yunnn.png';
const BlogPageBanner = () => {
    return (
        <div className='  '>
          <div className='lg:flex   '>
            <div className='lg:relative lg:w-1/3  bg-[#78286E] pb-12  md:pb-0 pt-[100px] md:py-[320px] lg:py-[320px]'>
            <div className='lg:absolute lg:left-28 bottom-16  w-[302px] mx-auto md:w-[632px] lg:w-[632px] h-[205px]  md:h-[395px] lg:h-[395px]'>
            <img className=' ' src={blogPagebannerPhoto} alt="" />
            </div>
            </div>
            <div className=' lg:w-2/3 bg-[#C8AFF0] pt-5 md:pt-40 lg:pt-28 pb-5 lg:pb-12'>
        <div className='flex justify-end mr-3'>
        <div className=''>
          <p className='text-[17px] text-center md:text-start lg:text-start md:text-[22px] lg:text-[22px] font-bold hover:underline'>Customer Stories</p>
       <div className=' mt-2 md:mt-8 lg:mt-8 w-full  mx-auto '>
       <h3 className='text-[20px] md:text-[100px] lg:text-[100px]  text-center md:text-start lg:text-start  font-abc md:w-[500px] lg:w-[500px] font-bold hover:underline lg:leading-[90px]   '>Remote and under control: How a K-Drama got made across continents</h3>
       </div>
          </div>
        </div>
            </div>
          </div>
        </div>
    );
};

export default BlogPageBanner;