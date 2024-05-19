import React from "react";
import { IoArrowForward } from "react-icons/io5";
import dashupdatedstartpage from "../../assets/dashupdatedstartpage.png";
const BetaProduct = () => {
  return (
    <div>
      <p className="flex justify-center ">
      
        <button className="text-center  bg-[#DEEBFF] text-[#0057E0] px-3  rounded-xl font-semibold  text-sm">
          New beta product
        </button>
      </p>
      <p className=" mt-4 text-center w-[300px] md:w-full lg:w-full mx-auto text-[22px] md:text-[39px] lg:text-[39px] font-medium"> 
        Shortcut your workday with Dropbox Dash
      </p>
      <p className="mt-2 mb-6 w-[300px] md:w-[760px] lg:w-[760px] mx-auto text-center">
        Quickly find, organize, and share important content all in one place
        with the AI universal search tool built to save you time, so you can
        focus on the work that matters most.
      </p>
      <div className="text-center flex justify-center  ">
        <button className="bg-[#5994f3] hover:bg-[#598de0] rounded-xl text-black text-[16px] font-semibold px-4  md:px-7 lg:px-7  py-[12px] md:py-[22px] lg:py-[22px] text-center flex justify-center items-center gap-4 md:gap-7 lg:gap-7 ">
          <p className="font-bold"> Get Dash beta free</p> <IoArrowForward />
        </button>
      </div>
      <div className="flex justify-center py-16 md:py-28  lg:py-28">
        <img
          className="w-[300px] h-[200px] md:w-[600px] md:h-[370px] lg:w-[600px] lg:h-[370px]"
          src={dashupdatedstartpage}
          alt=""
        />
      </div>
    </div>
  );
};

export default BetaProduct;
