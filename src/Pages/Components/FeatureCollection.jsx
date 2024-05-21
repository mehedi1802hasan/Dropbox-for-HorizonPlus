import React, { useState } from "react";
import Skywalkers from "../../assets/Skywalkers_ALoveStory-hero.webp";
import Rapport from "../../assets/Rapport-header.webp";
import chatbot from "../../assets/chatbot-humor-header.mp4";
import { FaLongArrowAltRight } from "react-icons/fa";

const FeatureCollection = () => {
  const [isNumber1, setIsNumber1] = useState(true);
  const [isNumber2, setIsNumber2] = useState(false);
  const [isNumber3, setIsNumber3] = useState(false);
  const handleNumber1 = () => {
    setIsNumber1(true);
    setIsNumber2(false);
    setIsNumber3(false);
  };
  const handleNumber2 = () => {
    setIsNumber1(false);
    setIsNumber2(true);
    setIsNumber3(false);
  };
  const handleNumber3 = () => {
    setIsNumber1(false);
    setIsNumber3(true);
    setIsNumber2(false);
  };
  return (
    <div>
      {/* number 1-------------  */}
      {isNumber1 && (
        <div className="lg:flex ">
          <div className="lg:w-3/6">
            <img className="h-full" src={Skywalkers} alt="" />
          </div>
          <div className="lg:w-3/6 text-white bg-[#283750] py-3 md:py-8 lg:py-8 px-16">
            <p className="lg:text-[24px] font-bold lg:mb-5">
              Featured Collection
            </p>
            <p className="lg:text-[72px] w-[200px] lg:leading-[70px] font-semibold ">
              Sundance Film Festival 2024
            </p>
            <p className="my-2 md:my-12 lg:my-12 text-[16px]  md:text-[24px]  lg:text-[24px] font-semibold w-[330px] lg:leading-[30px]">
              Over 60% of the feature films at the 2024 Sundance Film Festival
              were made using Dropbox. Find out how and.
            </p>
            <div className="border py-2 md:py-6 lg:py-6 flex justify-between items-center px-2  md:px-12 lg:px-12 w-4/6 ">
              <button className="text-[16px]  md:text-[22px]  lg:text-[22px] ">
                Explore Collection
              </button>{" "}
              <FaLongArrowAltRight />
            </div>{" "}
          </div>
          <div
            className="lg:w-1/6 -my-64 md:my-0 lg:my-0  flex items-center"
            style={{ height: "100vh" }}
          >
            <div className="flex flex-col text-[22px] md:text-[32px] lg:text-[32px] text-[#283750]  w-full">
              <p
                onClick={() => handleNumber1()}
                className="border-b  cursor-pointer text-center border-gray-300 w-full py-5 md:py-12 lg:py-12 font-medium"
              >
                1
              </p>
              <p
                onClick={() => handleNumber2()}
                className="border-b cursor-pointer text-center border-gray-300 w-full py-5 md:py-12 lg:py-12 font-medium"
              >
                2
              </p>
              <p
                onClick={() => handleNumber3()}
                className="border-b cursor-pointer text-center border-gray-300 w-full py-5 md:py-12 lg:py-12 font-medium"
              >
                3
              </p>
            </div>
          </div>

          <div></div>
        </div>
      )}

      {/* number 2-------------  */}
      {isNumber2 && (
        <div className="lg:flex ">
          <div className="lg:w-3/6 flex items-stretch">
            <video
              className="w-full h-full object-cover"
              src={chatbot}
              autoPlay
              muted
              loop
            />
          </div>

          <div className="lg:w-3/6 text-black bg-[#14C8EB] py-3 md:py-8 lg:py-8 px-16">
            <p className="lg:text-[24px] font-bold lg:mb-5">Featured Collection</p>
            <p className="lg:text-[72px] w-[200px] lg:leading-[70px] font-semibold ">
              Working Smarter
            </p>
            <p className="my-2 md:my-12 lg:my-12 text-[16px]  md:text-[24px]  lg:text-[24px] font-semibold w-[300px] lg:leading-[30px]">
              AI experts discuss how they’re leveraging machine learning to
              solve interesting problems and dramatically
            </p>
            <div className="border border-black py-2 md:py-6 lg:py-6 flex justify-between items-center px-2  md:px-12 lg:px-12 w-4/6 ">
              <button className="text-[16px]  md:text-[22px]  lg:text-[22px] ">Explore Collection</button>{" "}
              <FaLongArrowAltRight />
            </div>{" "}
          </div>
          <div
            className="lg:w-1/6 -my-64 md:my-0 lg:my-0 flex items-center"
            style={{ height: "100vh" }}
          >
            <div className="flex flex-col text-[22px] md:text-[32px] lg:text-[32px] text-[#283750]  w-full">
              <p
                onClick={() => handleNumber1()}
                className="border-b  cursor-pointer text-center border-gray-300 w-full py-5 md:py-12 lg:py-12 font-medium"
              >
                1
              </p>
              <p
                onClick={() => handleNumber2()}
                className="border-b cursor-pointer text-center border-gray-300 w-full py-5 md:py-12 lg:py-12 font-medium"
              >
                2
              </p>
              <p
                onClick={() => handleNumber3()}
                className="border-b cursor-pointer text-center border-gray-300 w-full py-5 md:py-12 lg:py-12 font-medium"
              >
                3
              </p>
            </div>
          </div>

          <div></div>
        </div>
      )}

      {/* number 3-------------  */}
      {isNumber3 && (
        <div className="lg:flex">
          <div className="lg:w-3/6">
            <img className="h-full" src={Rapport} alt="" />
          </div>

          <div className="lg:w-3/6 text-white bg-[#9B6400] py-3 md:py-8 lg:py-8 px-16 flex flex-col justify-center">
            <p className="lg:text-[24px] font-bold lg:mb-5">Featured Collection</p>
            <p className="lg:text-[72px] w-[200px] lg:leading-[70px] font-semibold">
              Virtual First
            </p>
            <p className="my-2 md:my-12 lg:my-12 text-[16px]  md:text-[24px]  lg:text-[24px] font-semibold w-[330px] lg:leading-[30px]">
              An exploration of how workplaces are redesigning the future of
              work to be better than its past—one asynchronous comment, chat,
              and video meeting at a time..
            </p>
            <div className="border py-2 md:py-6 lg:py-6 flex justify-between items-center px-2  md:px-12 lg:px-12 w-4/6 border-white">
              <button className="text-[16px]  md:text-[22px]  lg:text-[22px]">Explore Collection</button>
              <FaLongArrowAltRight />
            </div>
          </div>
          <div
            className="lg:w-1/6 -my-64 md:my-0 lg:my-0 flex items-center"
            style={{ height: "100vh" }}
          >
            <div className="flex flex-col text-[22px] md:text-[32px] lg:text-[32px] text-[#283750]  w-full">
              <p
                onClick={() => handleNumber1()}
                className="border-b  cursor-pointer text-center border-gray-300 w-full py-5 md:py-12 lg:py-12 font-medium"
              >
                1
              </p>
              <p
                onClick={() => handleNumber2()}
                className="border-b cursor-pointer text-center border-gray-300 w-full py-5 md:py-12 lg:py-12 font-medium"
              >
                2
              </p>
              <p
                onClick={() => handleNumber3()}
                className="border-b cursor-pointer text-center border-gray-300 w-full py-5 md:py-12 lg:py-12 font-medium"
              >
                3
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeatureCollection;
