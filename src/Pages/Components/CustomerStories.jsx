import React, { useState } from "react";
import customStory1 from "../../assets/customStory1.png";
import AugXhero from "../../assets/AugXhero.png";
import customStory3 from "../../assets/customStory3.png";

const CustomerStories = () => {
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
    <div className="text-black bg-[#FFCB95]  pb-12 md:pb-32 lg:pb-32 ">
      <div className=" pt-12 md:pt-32 lg:pt-32 px-24">
        <p className="text-[18px]  md:text-[22px] lg:text-[22px] font-bold text-[#0F503C]">
          Featured Topic
        </p>
        <div className="lg:flex items-center justify-between">
          <p className="text-[22px] md:text-[60px] lg:text-[60px] text-[#0F503C] font-familjen-grotesk font-bold">
            Customer Stories
          </p>
          <button className="text-[15px] border-2 font-bold  border-black px-7 py-1 md:py-2 lg:py-2 ">
            View all{" "}
          </button>
        </div>
      </div>

      <div className="mt-12 lg:flex justify-between items-center  lg:ps-24 ">
        {/* story --1 */}

        <div>
          <div style={{ position: "relative" }} onMouseMove={handleMouseMove}>
            <img
              className="w-[250px] h-[150px] mx-auto md:mx-0 lg:mx-0 md:w-[60vh] md:h-[60vh] lg:w-[60vh] lg:h-[60vh] hover:cursor-none"
              src={customStory1}
              alt=""
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            {isHovering && (
              <div
                style={{
                  position: "fixed",
                  left: cursorPosition.x + 10, // Adjust the offset as needed
                  top: cursorPosition.y + 10, // Adjust the offset as needed
                  backgroundColor: "black", // Black background
                  color: "red", // White text
                  padding: "6px 30px", // Padding of 7px
                  boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
                }}
              >
                <span className="bg-black text-white text-4xl">Read</span>
              </div>
            )}
          </div>
          <p className="text-[17px] md:text-[22px] lg:text-[22px] hover:underline font-bold w-[270px] md:w-[300px] lg:w-[300px] mx-auto md:mx-0 lg:mx-0 lg:leading-[27px] mt-4 mb-5">
            Remote and under control: How a K-Drama got made across continents
          </p>
          <p className="text-[15px] font-medium flex items-center gap-3 w-[260px] md:w-full lg:w-full mx-auto">
            By{" "}
            <span className="underline hover:no-underline">
              {" "}
              Tomi akitunde{" "}
            </span>{" "}
            <li>May 14, 2024</li>
          </p>
        </div>
        {/* story-- 2 */}

        <div className="my-10 md:my-0 lg:my-0">
          <div style={{ position: "relative" }} onMouseMove={handleMouseMove}>
            <img
              className=" w-[250px] h-[150px] mx-auto md:mx-0 lg:mx-0 md:w-[52vh] md:h-[32vh] lg:w-[52vh] lg:h-[32vh] hover:cursor-none"
              src={AugXhero}
              alt=""
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            {isHovering && (
              <div
                style={{
                  position: "fixed",
                  left: cursorPosition.x + 10, // Adjust the offset as needed
                  top: cursorPosition.y + 10, // Adjust the offset as needed
                  backgroundColor: "white",
                  padding: "6px 30px", // Padding of 7px
                  boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
                }}
              >
                <span>Read</span>
              </div>
            )}
          </div>{" "}
          <p className="text-[17px] md:text-[22px] lg:text-[22px] hover:underline font-bold w-[270px] md:w-[300px] lg:w-[300px] mx-auto md:mx-0 lg:mx-0 lg:leading-[27px] mt-4 mb-5">
            How Aug X Labs made video creation less of a chore, more of a game
          </p>
          <p className="text-[15px] font-medium flex items-center gap-3 w-[260px] md:w-full lg:w-full mx-auto">
            By{" "}
            <span className="underline hover:no-underline"> Drew Pearce </span>{" "}
            <li>May 10, 2024</li>
          </p>
        </div>

        {/* story-- 3 */}
        <div>
          <div style={{ position: "relative" }} onMouseMove={handleMouseMove}>
            <img
              className=" w-[250px] h-[150px] mx-auto md:mx-0 lg:mx-0 md:w-[52vh] md:h-[32vh] lg:w-[52vh] lg:h-[32vh]  hover: cursor-none"
              src={customStory3}
              alt=""
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            {isHovering && (
              <div
                style={{
                  position: "fixed",
                  left: cursorPosition.x + 10, // Adjust the offset as needed
                  top: cursorPosition.y + 10, // Adjust the offset as needed
                  backgroundColor: "black", // Black background
                  color: "white", // White text
                  padding: "6px 30px", // Padding of 7px
                  boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
                }}
              >
                <span className="text-4xl" style={{ color: "white" }}>
                  Read
                </span>
              </div>
            )}
          </div>

          <p className="text-[17px] md:text-[22px] lg:text-[22px] hover:underline font-bold w-[270px] md:w-[300px] lg:w-[300px] mx-auto md:mx-0 lg:mx-0 lg:leading-[27px] mt-4 mb-5">
            How one forensic psychologist keeps private investigations private
          </p>
          <p className="text-[15px] font-medium flex items-center gap-3 w-[260px] md:w-full lg:w-full mx-auto">
            By{" "}
            <span className="underline hover:no-underline"> Drew Pearce </span>{" "}
            <li>April 12, 2024</li>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerStories;
