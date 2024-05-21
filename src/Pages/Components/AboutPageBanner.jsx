import React from "react";
import teamWork from "../../assets/team-work.mp4";
const AboutPageBanner = () => {
  return (
    <div className=" pt-[60px] md:pt-[36px] lg:pt-[36px]  bg-[#1E1919] text-white">
      <div className="lg:flex items-center ">
        <div className="lg:w-1/2">
          <p className=" pt-2 pb-5 md:pt-0 md:pb-0 lg:pt-0 lg:pb-0 text-[16px] md:text-[40px] lg:text-[40px] text-center font-bold  w-[250px] md:w-[480px] lg:w-[480px] mx-auto font-space_grotesk">
            Our mission is to design a more enlightened way of working
          </p>
        </div>{" "}
        <div className="lg:w-1/2 ">
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
