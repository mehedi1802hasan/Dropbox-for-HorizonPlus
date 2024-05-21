import React from 'react';
import blogPagebannerPhoto from '../../assets/yun-hong-min-blog.webp'
const BlogPageBanner = () => {
    return (
        <div className='  '>
          <div className='flex   '>
            <div className='relative w-1/3  bg-[#78286E] py-[320px]'>
             <img className=' absolute left-52 bottom-16 w-[1243px] h-[305px]' src={blogPagebannerPhoto} alt="" />
            </div>
            <div className=' w-2/3 bg-[#C8AFF0] pt-40'>
        <div className='flex justify-end mr-16'>
        <div className=''>
          <p className='text-[22px] font-bold hover:underline'>Customer Stories</p>
       <div className='mt-8'>
       <h3 className='text-[80px] font-abc w-[550px] font-bold hover:underline lg:leading-[85px]   '>Remote and under control: How a K-Drama got made across continents</h3>
       </div>
          </div>
        </div>
            </div>
          </div>
        </div>
    );
};

export default BlogPageBanner;