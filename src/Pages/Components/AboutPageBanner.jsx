import React from "react";
import teamWork from "../../assets/team-work.mp4";
const AboutPageBanner = () => {
  return (
    <div className="pt-[36px]  bg-[#1E1919] text-white">
      <div className="flex items-center ">
        <div className="w-1/2">
          <p className="text-[40px] text-center font-bold w-[480px] mx-auto font-space_grotesk">
            Our mission is to design a more enlightened way of working
          </p>
        </div>{" "}
        <div className="w-1/2">
          <div className=" w-full h-[550px]">
            <video
              className=" w-full h-full  object-cover"
              src={teamWork}
              autoPlay
              loop
              muted
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageBanner;
