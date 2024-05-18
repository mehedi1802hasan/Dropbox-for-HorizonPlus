import React from "react";
import drewhouston from "../../assets/drewhouston.png";
import samanasheer from "../../assets/samanasheer.png";
import melaniecollins from "../../assets/melaniecollins.png";
import timregan from "../../assets/timregan.png";
import bartvolkmer from "../../assets/bartvolkmer.png";
import EricCox from "../../assets/EricCox.png";
const OurTeam = () => {
  return (
    <div className="bg-[#1E1919] text-white py-16">
      <div className="w-[1170px] mx-auto">
        <p className="text-[32px] text-center "> Our Team</p>
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-20">

            {/* 1 number card */}
          <div className="w-[366px]">
            <img className="h-[366px]" src={drewhouston} alt="" />
            <p className="text-[20px] font-semibold mt-3 mb-4">Drew Houston, Co-founder and CEO</p>
            <p className="text-[16px]">
              Drew co-founded Dropbox in 2007. He’s led our growth from a simple
              idea to a service used by hundreds of millions of people around
              the world. Drew’s responsible for the direction and product
              strategy of our company
            </p>
          </div>

            {/* 2 number card */}
          <div className="w-[366px]">
            <img className="h-[366px]" src={samanasheer} alt="" />
            <p className="text-[20px] font-semibold mt-3 mb-4">Saman Asheer, Chief Communications Officer</p>
            <p className="text-[16px]">
            Saman leads internal and external communications, and analyst relations at Dropbox. Previously, she advised clients across industries on corporate and financial communications at the Brunswick Group.
            </p>
          </div>

                      {/* 3 number card */}

          <div className="w-[366px]">
            <img className="h-[366px]" src={melaniecollins} alt="" />
            <p className="text-[20px] font-semibold mt-3 mb-4">Melanie Rosenwasser, Chief People Officer</p>
            <p className="text-[16px]">
            Melanie oversees our global people team, including people operations, recruiting, and diversity, equity, and inclusion. Prior to Dropbox she held HR leadership roles at Apple and GE.
            </p>
          </div>
                      {/* 4 number card */}

          <div className="w-[366px]">
            <img className="h-[366px]" src={timregan} alt="" />
            <p className="text-[20px] font-semibold mt-3 mb-4">Tim Regan, Chief Financial Officer
</p>
            <p className="text-[16px]">
            Tim oversees our financial operations and strategy, accounting, corporate development, investor relations, financial planning and analysis, tax, and real estate. Prior to Dropbox, Tim was at Pandora, Dolby Laboratories, and Ernst & Young.
            </p>
          </div>
                    
            {/* 5 number card */}

          <div className="w-[366px]">
            <img className="h-[366px]" src={bartvolkmer} alt="" />
            <p className="text-[20px] font-semibold mt-3 mb-4">Bart Volkmer, Chief Legal Officer
</p>
            <p className="text-[16px]">
            Bart leads our legal, risk and compliance, and public policy teams. Before Dropbox, he practiced law at Wilson Sonsini Goodrich & Rosati, where he counseled early-stage and established technology companies.
            </p>
          </div>

                      {/* 6 number card */}

          <div className="w-[366px]">
            <img className="h-[366px]" src={EricCox} alt="" />
            <p className="text-[20px] font-semibold mt-3 mb-4">Eric Cox, Chief Customer Officer
</p>
            <p className="text-[16px]">
            Eric oversees our Go-To-Market teams, including sales, customer experience, commercial strategy & enablement, and marketing & communications. Before Dropbox, he was at Vimeo and Adobe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
