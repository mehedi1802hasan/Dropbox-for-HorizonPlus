import React, { useContext, useState } from "react";
import abdiaidid from "../../assets/abdiaidid.png";
import Workslower from "../../assets/Workslower.png";
import AugXhero from "../../assets/AugXhero.png";
import robo from "../../assets/robo.png";
import aiSpottingm from "../../assets/aiSpottingm.gif";
import AddBlogModal from "./AddBlogModal";
import { BlogContext } from "../../NewBlogContext";
const Blog = () => {
  const [isAdd,setIsAdd]=useState(false);
  const handleAddBlog=()=>{
    setIsAdd(true);
  };
  const { blogs } = useContext(BlogContext);

  return (
    <div className="text-black lg:pb-52 lg:pt-32  ">
      <div className="">
        <div onClick={()=>handleAddBlog()} className="flex mb-12 justify-end  w-[1100px]  mx-auto ">
          <button className="  border-2 px-8 py-3 border-black rounded-sm hover:border-red-400  hover:bg-yellow-400 font-bold hover:text-white  ">
            Add Blog
          </button>
        </div>

                {/* Daynamic blogs */}
  <div className="blog-list grid grid-cols-2 mb-24 gap-y-20 w-[1070px] mx-auto">
            {blogs.length > 0 ? (
                blogs.map((blog, index) => (
                    <div key={index} className="blog-item  p-4 mb-4 rounded">
                        <img  src={blog.image} alt={blog.name} className="w-[337px] h-[211px] mt-2" />
                        <p className="mt-6 mb-4 hover:underline text-[22px] font-bold w-[400px] text-black">
                        {blog.title}
            </p>
            <p className="text-[15px] hover:underline">{blog.type}</p>
                    </div>
                ))
            ) : (
                <p></p>
            )}
        </div>

        <div className="  lg:flex  justify-center gap-28">

                 {/* 1st static blog */}
   <div className="mt-6">
            <img className="w-[464px] h-[464px]" src={abdiaidid} alt="" />
            <p className="mt-6 mb-4 hover:underline text-[22px] font-bold w-[400px] text-black">
              Abdi Aidid on being your most creative, dynamic self
            </p>
            <p className="text-[15px] hover:underline">Podcast</p>
          </div>
                   {/* 2nd static blog */}
 <div>
            <img className="w-[506px] h-[510px]" src={Workslower} alt="" />
            <p className="mt-6 mb-4 hover:underline text-[22px] font-bold w-[400px] text-black">
              Abdi Aidid on being your most creative, dynamic self
            </p>
            <p className="text-[15px] hover:underline">Podcast</p>
          </div>
        </div>
        <div className="mt-28 w-[1170px] mx-auto lg:flex  justify-between  gap-8">
          {/* 3rd static blog */}
          <div className="mt-6">
            <img className="w-[337px] h-[211px]" src={AugXhero} alt="" />
            <p className="mt-6 mb-4 hover:underline text-[22px] font-bold w-[270px]   lg:leading-[25px] text-black">
              How Aug X Labs made video creation less of a chore, more of a game
            </p>
            <p className="text-[15px] hover:underline">Customer Stories</p>
          </div>
          {/*4th static blog */}

          <div className="mt-">
            <img className="w-[337px] h-[337px]" src={robo} alt="" />
            <p className="mt-6 mb-4 hover:underline text-[22px] font-bold w-[300px] text-black">
              Will robots give us more "me" time?
            </p>
            <p className="text-[15px] hover:underline">Work Culture</p>
          </div>

          {/*5th static blog */}
          <div>
            <img className="w-[337px] h-[337px]" src={aiSpottingm} alt="" />
            <p className="mt-6 mb-4 hover:underline text-[22px] font-bold w-[240px] text-black">
              How AI is spotting manatees in the wild
            </p>
            <p className="text-[15px] hover:underline">Work Culture</p>
          </div>
        </div>
      </div>
      <AddBlogModal isAdd={isAdd} setIsAdd={setIsAdd}></AddBlogModal>
    </div>
  );
};

export default Blog;
