import React from "react";
import { IoArrowForward } from "react-icons/io5";

const GetStartDropbox = () => {
  return (
  <div className="  lg:py-3 ">
      <div className="  lg:flex justify-between items-center w-[300px] md:w-[1200px] lg:w-[1200px] mx-auto">
      <p className="text-[20px] md:text-[40px] lg:text-[40px] font-semibold text-center md:text-start lg:text-start mt-3 md:mt-0 lg:mt-0">Get started with Dropbox</p>
      <div className="text-center    flex lg:block md:block justify-center items-center ">
        <button className="bg-[#5994f3] hover:bg-[#598de0] rounded-xl text-black text-[14px] md:text-[16px] lg:text-[16px] font-semibold px-7  py-[14px] md:py-[22px] lg:py-[22px] text-center flex justify-center items-center gap-7 my-4  md:my-12 lg:my-12 ">
          <p className="font-bold">View plan details</p>
          <IoArrowForward />
        </button>
      </div>
    </div>
  </div>
  );
};

export default GetStartDropbox;
