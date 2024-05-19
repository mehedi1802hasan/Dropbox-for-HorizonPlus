import React from "react";
import insight from "../../assets/insight.png";
import { IoArrowForward } from "react-icons/io5";

const Insight = () => {
  return (
    <div className="text-[#F7F5F2]">
      <div className="flex justify-between ">
        <div className="w-1/2  bg-[#1E1919] ">
          <div className="py-12 px-16 h-full">
            <p className="text-[14px] font-semibold">New Release</p>{" "}
            <p className="text-[40px] my-4 w-[500px] lg:leading-[45px] font-space_grotesk font-bold">
              Working Smarter — A podcast about AI and modern work
            </p>
            <p className="text-[16px] font-medium w-[500px]">
              Learn how people are using AI at work to collaborate, find focus,
              and get stuff done. Hear founders, researchers, and engineers talk
              about the problems they’re solving with the help of new and
              emerging AI tools, and how AI can help you spend more time on the
              work that matters most.
            </p>
            <p className="text-[16px] my-4 font-medium w-[500px]">
              Follow: <span className="underline">Apple Podcasts</span> | <span className="underline">Spotify</span> | <span className="underline">YouTube Music</span> | <span className="underline">Amazon Music</span> |
               <span className="underline"> RSS</span>
            </p>
            <div className="text-center  mt-5 ">
              <button className="hover:bg-[#44474d]  border-2 text-[16px] font-semibold px-7  py-5 text-center flex justify-center items-center gap-7 ">
                <p className="text-[16px]"> Latest eposodes</p>{" "}
                <IoArrowForward />
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2  border">
          <img className="h-full" src={insight} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Insight;
