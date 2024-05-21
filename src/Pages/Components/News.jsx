import React, { useState } from "react";
import Earnings from "../../assets/Earnings.png";
import ourDiversity from "../../assets/ourDiversity.png";
import fastTrackVideo from "../../assets/fastTrackVideo.png";

const News = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  
    const handleMouseEnter = () => {
      setIsHovering(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovering(false);
    };
  
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
  return (
    <div className="text-black bg-[#B4C8E1]  pb-12 md:pb-32 lg:pb-32 ">
    <div className=" pt-12 md:pt-32 lg:pt-32 px-24">
    <p className="ttext-[18px]  md:text-[22px] lg:text-[22px] font-bold text-[#61082B]">Featured Topic</p>
      <div className="lg:flex items-center justify-between">
        <p className="text-[22px] md:text-[60px] lg:text-[60px] text-[#61082B] font-familjen-grotesk font-bold">News</p>
        <button className="text-[15px] border-2 font-bold  border-black px-7 py-1 md:py-2 lg:py-2 ">View all </button>
      </div>
    </div>

      <div className="mt-12 lg:flex justify-between items-center  lg:ps-24 ">
                {/* story --1 */}

        <div >
        <div style={{ position: 'relative' }} onMouseMove={handleMouseMove}>
      <img
        className="w-[250px] h-[150px] mx-auto md:mx-0 lg:mx-0 md:w-[59vh] md:h-[31vh] lg:w-[59vh] lg:h-[31vh]  hover:cursor-none"
        src={Earnings}
        alt=""
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {isHovering && (
        <div
        style={{
            position: 'fixed',
            left: cursorPosition.x + 10, // Adjust the offset as needed
            top: cursorPosition.y + 10, // Adjust the offset as needed
            backgroundColor: 'black', // Black background
            color: 'red', // White text
            padding: '6px 30px',  // Padding of 7px
            boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)',
          }}
        >
          <span className="bg-black text-white text-4xl">Read</span>
        </div>
      )}
    </div>
          <p className="text-[17px] md:text-[22px] lg:text-[22px] hover:underline font-bold w-[270px] md:w-[300px] lg:w-[300px] mx-auto md:mx-0 lg:mx-0 lg:leading-[27px] mt-4 mb-5">Dropbox Announces Fiscal 2024 First Quarter Results</p>
      <p className="text-[15px] font-medium flex items-center gap-3 w-[260px] md:w-full lg:w-full mx-auto">By  <span className="underline hover:no-underline"> Dropbox team  </span> <li>May 9, 2024</li></p>
        </div>
                {/* story-- 2 */}

        <div className="mt-10 mb-10 lg:mb-0 md:-mt-6  lg:-mt-6  ">
        <div style={{ position: 'relative' }} onMouseMove={handleMouseMove}>
      <img
        className="w-[250px] h-[150px] mx-auto md:mx-0 lg:mx-0 md:w-[59vh] md:h-[31vh] lg:w-[59vh] lg:h-[31vh]  hover:cursor-none"
        src={ourDiversity}
        alt=""
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {isHovering && (
        <div
          style={{
            position: 'fixed',
            left: cursorPosition.x + 10, // Adjust the offset as needed
            top: cursorPosition.y + 10, // Adjust the offset as needed
            backgroundColor: 'white',
            padding: '6px 30px',  // Padding of 7px
            boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)',
          }}
        >
          <span>Read</span>
        </div>
      )}
    </div>          <p className="text-[17px] md:text-[22px] lg:text-[22px] hover:underline font-bold w-[270px] md:w-[300px] lg:w-[300px] mx-auto md:mx-0 lg:mx-0 lg:leading-[27px] mt-4 mb-5">Our 2023 Diversity Report</p>
      <p className="text-[15px] font-medium flex items-center gap-3 w-[260px] md:w-full lg:w-full mx-auto">By  <span className="underline hover:no-underline"> Dropbox Team  </span> <li>May 07, 2024</li></p>
        </div>

        {/* story-- 3 */}
        <div>


        <div style={{ position: 'relative' }} onMouseMove={handleMouseMove}>
    <img
      className="w-[250px] h-[150px] mx-auto md:mx-0 lg:mx-0 md:w-[59vh] md:h-[37vh] lg:w-[59vh] lg:h-[37vh]   hover: cursor-none"
      src={fastTrackVideo}
      alt=""
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
    {isHovering && (
      <div
        style={{
          position: 'fixed',
          left: cursorPosition.x + 10, // Adjust the offset as needed
          top: cursorPosition.y + 10, // Adjust the offset as needed
          backgroundColor: 'black', // Black background
          color: 'white', // White text
          padding: '6px 30px',  // Padding of 7px
          boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)',
        }}
      >
        <span className="text-4xl" style={{ color: 'white' }}>Read</span>
      </div>
    )}
  </div>

     <p className="text-[17px] md:text-[22px] lg:text-[22px] hover:underline font-bold w-[270px] md:w-[300px] lg:w-[300px] mx-auto md:mx-0 lg:mx-0 lg:leading-[27px] mt-4 mb-5">Fast-track video, image, and audio reviews with new features in Dropbox Replay</p>
      <p className="text-[15px] font-medium flex items-center gap-3 w-[260px] md:w-full lg:w-full mx-auto">By  <span className="underline hover:no-underline"> Dropbox Team  </span> <li>April 24, 2024

</li></p>
        </div>
      </div>
    </div>
  );
};
 
export default News;