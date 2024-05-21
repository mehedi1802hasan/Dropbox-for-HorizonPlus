import React from "react";
import { IoArrowForward } from "react-icons/io5";

const LatestNews = () => {
  return (
  <div className=" py-8 md:py-9  lg:py-9 bg-[#1E1919] text-white">
      <div className="  lg:flex gap-44 items-center  w-[260px] md:w-[1170px] lg:w-[1170px] mx-auto">
      <p className="text-[18px] md:text-[40px] lg:text-[40px] font-semibold font-space_grotesk w-[270px] text-center lg:text-start md:text-start md:w-[600px] lg:w-[600px]">Stay informed with the latest Dropbox news.</p>
      <div className="text-center flex justify-center    ">
        <button className="bg-[#5994f3] hover:bg-[#598de0] rounded-xl text-black text-[12px]  md:text-[16px] lg:text-[16px] font-semibold  px-4  md:px-7  lg:px-7  py-[15px]  md:py-[22px]  lg:py-[22px] text-center flex justify-center items-center gap-7 my-4 md:my-12 lg:my-12 ">
          <p className="font-bold">Read more</p>
          <IoArrowForward />
        </button>
      </div>
    </div>
  </div>
  );
};

export default LatestNews;
