import React from "react";
import abdiaidid from "../../assets/abdiaidid.png";
import Workslower from "../../assets/Workslower.png";
import AugXhero from "../../assets/AugXhero.png";
import robo from "../../assets/robo.png";
import aiSpottingm from "../../assets/aiSpottingm.gif";
const Blog = () => {
  return (
    <div className="text-black lg:py-52">
      <div className="">
        <div className="  lg:flex  justify-center gap-28">
          <div className="mt-6">
            <img className="w-[464px] h-[464px]" src={abdiaidid} alt="" />
            <p className="mt-6 mb-4 hover:underline text-[22px] font-bold w-[400px] text-black">
              Abdi Aidid on being your most creative, dynamic self
            </p>
            <p className="text-[15px]">Podcast</p>
          </div>
          <div>
            <img className="w-[506px] h-[510px]" src={Workslower} alt="" />
            <p className="mt-6 mb-4 hover:underline text-[22px] font-bold w-[400px] text-black">
              Abdi Aidid on being your most creative, dynamic self
            </p>
            <p className="text-[15px]">Podcast</p>
          </div>
        </div>
        <div className="mt-28 w-[1170px] mx-auto lg:flex  justify-between  gap-8">
            {/* 3rd static blog */}
          <div className="mt-6">
            <img className="w-[337px] h-[211px]" src={AugXhero} alt="" />
            <p className="mt-6 mb-4 hover:underline text-[22px] font-bold w-[270px]   lg:leading-[25px] text-black">
            How Aug X Labs made video creation less of a chore, more of a game
            </p>
            <p className="text-[15px]">Customer Stories</p>
          </div>
                      {/*4th static blog */}

          <div className="mt-">
            <img className="w-[337px] h-[337px]" src={robo} alt="" />
            <p className="mt-6 mb-4 hover:underline text-[22px] font-bold w-[300px] text-black">
            Will robots give us more "me" time?
            </p>
            <p className="text-[15px]">Work Culture</p>
          </div>
          
                      {/*5th static blog */}
          <div>
            <img className="w-[337px] h-[337px]" src={aiSpottingm} alt="" />
            <p className="mt-6 mb-4 hover:underline text-[22px] font-bold w-[240px] text-black">
            How AI is spotting manatees in the wild
            </p>
            <p className="text-[15px]">Work Culture

</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
