import React from "react";
import DropboxBanner from "../../assets/dropboxBannerVideo.mp4";
import { IoArrowForward } from "react-icons/io5";

const HomeBanner = () => {
  return (
    <div className=" text-white pt-32 pb-16 ">
      <div>
        <p className="text-center text-[42px] w-[600px] mx-auto lg:leading-[45px]">
          Join over 700 million registered users who trust Dropbox
        </p>
        <p className="text-center  w-[760px] mx-auto my-5">
          Easy to use, reliable, private, and secure. It’s no wonder Dropbox is
          the choice for storing and sharing your most important files.
        </p>
        <div className="text-center flex justify-center  ">
          <button className="bg-[#2c6dd6] hover:bg-[#598de0] rounded-xl text-black text-[16px] font-semibold px-7  py-5 text-center flex justify-center items-center gap-7 ">
           <p> Find your Plan</p> <IoArrowForward />

          </button>
        </div>
        <div className="mt-7 mb-10 flex justify-center items-center gap-3">
          <input type="text " className="hover:cursor-pointer w-[300px] h-12 bg-[#1E1919] border border-[#736C64] ps-3" placeholder='Enter your email address' />
           <button className="  border-2  border-white px-7 py-[10px] rounded-xl hover:bg-[#463e3e]">Sign up for free</button>
        </div>
        <div className=" w-full h-full">
          <video
            className=" w-full h-full object-cover"
            src={DropboxBanner}
            autoPlay
            loop
            muted
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
