import React from "react";
import { IoArrowForward } from "react-icons/io5";

const LatestNews = () => {
  return (
  <div className="  py-9 bg-[#1E1919] text-white">
      <div className="  flex gap-44 items-center w-[1170px] mx-auto">
      <p className="text-[40px] font-semibold font-space_grotesk w-[600px]">Stay informed with the latest Dropbox news.</p>
      <div className="text-center   ">
        <button className="bg-[#5994f3] hover:bg-[#598de0] rounded-xl text-black text-[16px] font-semibold px-7  py-[22px] text-center flex justify-center items-center gap-7 my-12 ">
          <p className="font-bold">Read more</p>
          <IoArrowForward />
        </button>
      </div>
    </div>
  </div>
  );
};

export default LatestNews;
