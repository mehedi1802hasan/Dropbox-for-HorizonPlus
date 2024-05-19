import React from "react";
import teamsUi from "../../assets/teamsUi.png";
import professionalsUi from "../../assets/professionalsUi.png";
import { IoArrowForward } from "react-icons/io5";

const HowUseDropbox = () => {
  return (
    <div>
      <p className="text-[18px] md:text-[35px] lg:text-[35px] text-center font-bold">
        How will you use Dropbox?
      </p>

      <div className="lg:flex justify-center gap-4 px-12  mt-2 md:mt-16 lg:mt-16  py-8">
        <div className="bg-[#2B2929] pb-1 md:pb-0 lg:pb-0">
          <img src={teamsUi} alt="" />
          <div className="ml-10">
            <p className="text-2xl font-semibold my-4  md:my-12 lg:my-12">For work</p>
            <p className="w-[230px] md:w-full lg:w-full " >
              Work efficiently with teammates and clients, stay in sync on
              projects, and keep company data safe—all in one place.
            </p>
            <div className="text-center   ">
              <button className="bg-[#5994f3] hover:bg-[#598de0] rounded-xl text-black text-[13px] md:text-[16px] lg:text-[16px] font-semibold px-7  py-[16px] text-center flex justify-center items-center gap-4  md:gap-7 lg:gap-7 my-5 md:my-12 lg:my-12 ">
                <p className="font-bold"> Get Dropbox for work</p>{" "}
                <IoArrowForward />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#2B2929] pb-1 md:pb-0 lg:pb-0 mt-5 lg:mt-0 md:mt-0">
          <img src={professionalsUi} alt="" />
          <div className="ml-10">
            <p className="text-2xl font-semibold my-4  md:my-12 lg:my-12">For personal use</p>
            <p className="w-[230px] md:w-full lg:w-full ">
              Keep everything that’s important to you and your family shareable
              and safe in one place. Back up files in the cloud, share photos
              and videos, and more.
            </p>
            <div className="text-center   ">


            <button className="bg-[#5994f3] hover:bg-[#598de0] rounded-xl text-black text-[13px] md:text-[16px] lg:text-[16px]  font-semibold  px-4 md:px-7 lg:px-7  py-[16px] text-center flex justify-center items-center gap-4  md:gap-7 lg:gap-7 my-5 md:my-12 lg:my-12 ">
                <p className="font-bold"> Get Dropbox for personal use</p>{" "}
                <IoArrowForward />
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowUseDropbox;
