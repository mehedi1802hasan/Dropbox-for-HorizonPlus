import React from 'react';
import blogPagebannerPhoto from '../../assets/blogPagebannerPhoto.png'
const BlogPageBanner = () => {
    return (
        <div className=' '>
          <div className='flex  '>
            <div className='relative w-1/3  bg-[#78286E]'>
             <img className=' absolute left-52 top-28 w-[1860px] h-[395px]' src={blogPagebannerPhoto} alt="" />
            </div>
            <div className=' w-2/3'>
          <div>
          <p className='text-[22px] font-bold underline'>Customer Stories</p>
           <h3 className='text-[97px] font-familjen-grotesk w-[900px] font-bold'>Remote and under control: How a K-Drama got made across continents</h3>
          </div>
            </div>
          </div>
        </div>
    );
};

export default BlogPageBanner;