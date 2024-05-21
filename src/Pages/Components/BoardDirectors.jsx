import React from 'react';
import drewhouston from '../../assets/drewhouston.png';
import donblair from '../../assets/donblair.png';
import lisacampbell from '../../assets/lisacampbell.png';
import pauljacobs from '../../assets/pauljacobs.png';
import saramathew from '../../assets/saramathew.png';
import abhayabout from '../../assets/abhayabout.png';
import karenpeacock from '../../assets/karenpeacock.png';
import michaelseibel from '../../assets/michaelseibel.png';
import andrewmoore from '../../assets/andrewmoore.png';
const BoardDirectors = () => {
    return (
        <div className="bg-[#F7F5F2] text-black py-16">
        <div className="w-[250px] md:w-[1170px]  lg:w-[1170px]  mx-auto">
          <p className="text-[22px] md:text-[32px] lg:text-[32px] text-center"> Board of directors</p>
          <div className="mt-3  md:mt-14  lg:mt-14 grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-20 lg:gap-20">
  
              {/* 1 number card */}
            <div className="w-[200px] md:w-[366px] lg:w-[366px] mx-auto md:mx-0 lg:mx-0">
              <img className="h-[200px] md:h-[366px] lg:h-[366px]" src={drewhouston} alt="" />
              <p className="text-[15px] md:text-[20px] lg:text-[20px] font-semibold mt-3 mb-4">Drew Houston, Co-founder and CEO</p>
              <p className="text-[16px]">
                Drew co-founded Dropbox in 2007. He’s led our growth from a simple
                idea to a service used by hundreds of millions of people around
                the world. Drew’s responsible for the direction and product
                strategy of our company
              </p>
            </div>
  
              {/* 2 number card */}
            <div className="w-[200px] md:w-[366px] lg:w-[366px] mx-auto md:mx-0 lg:mx-0">
              <img className="h-[200px] md:h-[366px] lg:h-[366px]" src={donblair} alt="" />
              <p className="text-[15px] md:text-[20px] lg:text-[20px] font-semibold mt-3 mb-4">Don Blair, Former CFO Nike
</p>
              <p className="text-[16px]">
              Don brings over three decades’ experience leading finance and strategy for global consumer businesses. As CFO of NIKE and in PepsiCo assignments worldwide, he built profitable growth businesses that created long-term value for shareholders and are beloved by consumers.
              </p>
            </div>
  
                        {/* 3 number card */}
  
            <div className="w-[200px] md:w-[366px] lg:w-[366px] mx-auto md:mx-0 lg:mx-0">
              <img className="h-[200px] md:h-[366px] lg:h-[366px]" src={lisacampbell} alt="" />
              <p className="text-[15px] md:text-[20px] lg:text-[20px] font-semibold mt-3 mb-4">Lisa Campbell, CMO OneTrust
</p>
              <p className="text-[16px]">
              Lisa is a leader in the software industry with more than two decades of experience. As CMO at OneTrust, Lisa drives the overall marketing and strategic roadmap for the company. She also has extensive experience transforming brands, and launching new products and business models for Fortune 500 companies and startups.

</p>
            </div>
                        {/* 4 number card */}
  
            <div className="w-[200px] md:w-[366px] lg:w-[366px] mx-auto md:mx-0 lg:mx-0">
              <img className="h-[200px] md:h-[366px] lg:h-[366px]" src={pauljacobs} alt="" />
              <p className="text-[15px] md:text-[20px] lg:text-[20px] font-semibold mt-3 mb-4">Paul Jacobs, CEO Globalstar, Inc. and VIREWIRX, Inc., and Former CEO Qualcomm

  </p>
              <p className="text-[16px]">
              Paul is widely considered one of tech’s most visionary leaders. He helped lead the mobile revolution in the early 2000s, creating many of the foundational technologies that made the smartphone possible and set the stage for a connected world.
              </p>
            </div>
                      
              {/* 5 number card */}
  
            <div className="w-[200px] md:w-[366px] lg:w-[366px] mx-auto md:mx-0 lg:mx-0">
              <img className="h-[200px] md:h-[366px] lg:h-[366px]" src={saramathew} alt="" />
              <p className="text-[15px] md:text-[20px] lg:text-[20px] font-semibold mt-3 mb-4">Sara Mathew, Former Chairman and CEO of Dun & Bradstreet
  </p>
              <p className="text-[16px]">
              Sara brings years of experience driving growth and innovation. She currently sits on the boards of State Street and Carnival. Formerly, she was chairman and CEO of The Dun & Bradstreet Corporation, where she transformed the business by leveraging customer-focused technology. She also spent 18 years at Proctor & Gamble, where she held executive roles.
              </p>
            </div>
  
                        {/* 6 number card */}
  
            <div className="w-[200px] md:w-[366px] lg:w-[366px] mx-auto md:mx-0 lg:mx-0">
              <img className="h-[200px] md:h-[366px] lg:h-[366px]" src={abhayabout} alt="" />
              <p className="text-[15px] md:text-[20px] lg:text-[20px] font-semibold mt-3 mb-4">Abhay Parasnis, CEO Typeface.ai

  </p>
              <p className="text-[16px]">
              Abhay brings over two decades of experience scaling new businesses and innovative technology platforms. Previously, as CPO & CTO at Adobe, he was responsible for leading product strategy, technology vision, and engineering for Adobe’s diverse cloud portfolio. Abhay also held leadership roles at major technology companies including Microsoft, Oracle, and IBM.
              </p>
            </div>


               {/* 7 number card */}
  
               <div className="w-[200px] md:w-[366px] lg:w-[366px] mx-auto md:mx-0 lg:mx-0">
              <img className="h-[200px] md:h-[366px] lg:h-[366px]" src={karenpeacock} alt="" />
              <p className="text-[15px] md:text-[20px] lg:text-[20px] font-semibold mt-3 mb-4">Karen Peacock, Former CEO Intercom
  </p>
              <p className="text-[16px]">
              Karen brings years of experience growing teams and scaling businesses. In her prior role as CEO of Intercom, she led the business messaging app’s company and product strategy. She also previously served as Intuit’s SVP of Small Business, where she oversaw all of the division’s products and helped grow its annual revenue.
              </p>
            </div>


               {/* 8 number card */}
  
               <div className="w-[200px] md:w-[366px] lg:w-[366px] mx-auto md:mx-0 lg:mx-0">
              <img className="h-[200px] md:h-[366px] lg:h-[366px]" src={michaelseibel} alt="" />
              <p className="text-[15px] md:text-[20px] lg:text-[20px] font-semibold mt-3 mb-4">Michael Seibel, Group Partner at Y Combinator

  </p>
              <p className="text-[16px]">
              Michael is a skilled entrepreneur, investor, and advisor to companies across industries. He’s now Group Partner of Y Combinator. Previously, he was Managing Partner of YC Early Stage, co-founder and CEO of Justin.tv, which later became Twitch Interactive, and co-founder of Socialcam.
              </p>
            </div>


               {/* 9 number card */}
  
               <div className="w-[200px] md:w-[366px] lg:w-[366px] mx-auto md:mx-0 lg:mx-0">
              <img className="h-[200px] md:h-[366px] lg:h-[366px]" src={andrewmoore} alt="" />
              <p className="text-[15px] md:text-[20px] lg:text-[20px] font-semibold mt-3 mb-4">Dr. Andrew Moore, Founder and CEO of Lovelace AI
  </p>
              <p className="text-[16px]">
              Andrew brings decades of experience in AI, in both business and academic settings. He is the Founder and CEO of Lovelace AI. His previous roles include General Manager and VP for the AI division of Google Cloud, and Dean of the School of Computer Science at Carnegie Mellon University. He began his career as a professor of Computer Science and Robotics at CMU.              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BoardDirectors;