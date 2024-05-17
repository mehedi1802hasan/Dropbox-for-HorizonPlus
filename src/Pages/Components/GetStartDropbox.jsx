import React from "react";
import { IoArrowForward } from "react-icons/io5";

const GetStartDropbox = () => {
  return (
  <div className="  py-3">
      <div className="  flex justify-between items-center w-[1200px] mx-auto">
      <p className="text-[40px] font-semibold">Get started with Dropbox</p>
      <div className="text-center   ">
        <button className="bg-[#5994f3] hover:bg-[#598de0] rounded-xl text-black text-[16px] font-semibold px-7  py-[22px] text-center flex justify-center items-center gap-7 my-12 ">
          <p className="font-bold">View plan details</p>
          <IoArrowForward />
        </button>
      </div>
    </div>
  </div>
  );
};

export default GetStartDropbox;
