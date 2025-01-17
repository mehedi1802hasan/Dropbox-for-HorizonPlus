import React from "react";
import LockupMc from "../../assets/Lockup.svg";
import DigitalNomads from "../../assets/DigitalNomads.png";
import { IoMdArrowForward } from "react-icons/io";
import adamMontStory from "../../assets/adamMontStory.png";
import AnnKappesStory from "../../assets/AnnKappesStory.png";
import MurrayBellStory from "../../assets/MurrayBellStory.png";
import AndiScullStory from "../../assets/AndiScullStory.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const HomePageStorySlider = () => {
  return (
    <div className="bg-[#242121] py-10 md:py-20 lg:py-20  px-5">
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

        {/* swiper number--1 */}
        <SwiperSlide>
          <div className="w-[300px]  md:w-[1170px] lg:w-[1170px]  mx-auto lg:flex justify-between items-center">
            <div className="flex justify-center items-center bg-white w-[300px] md:w-[462px] lg:w-[462px] h-[202px] md:h-[462px] lg:h-[462px]">
            
              <img className="w-[250px] lg:w-[270px] lg:h-[270px]" src={LockupMc} alt="" />
            </div>
            <div className="mt-4 md:mt-0 lg:mt-0 ">
              <p className="text-[15px] md:text-[17px] lg:text-[17px] w-[230px] md:w-[600px] lg:w-[600px] mx-auto md:mx-0 lg:mx-0">
              “Dropbox has been tremendously helpful for social media. I can hop on anytime and pull whatever photo is inspiring me to post.”
              </p>
              <p className="my-3 md:my-5 lg:my-5 text-[14px]  md:text-[17px]  lg:text-[17px] hover:text-[18px] hover:right-3 font-semibold flex items-center gap-3 underline hover:underline-offset-2 w-[180px] md:w-full lg:w-full mx-auto md:mx-0 lg:mx-0">
                Read the full story <IoMdArrowForward className="text-xl " />
              </p>
              <div className="text-[13px]  md:text-[15px]  lg:text-[15px] w-[180px] md:w-full lg:w-full mx-auto md:mx-0 lg:mx-0">
                <p className="font-semibold">Mary Ashley Krogh (MAK)</p>
                <p className="text-[#A2A09E] mt-1">Illustrator and Graphic Designer</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* swiper number--2 */}
        <SwiperSlide>
          <div className="w-[300px]  md:w-[1170px] lg:w-[1170px]  mx-auto lg:flex justify-between items-center">
       
            
              <img className="w-[300px] md:w-[462px] lg:w-[462px] h-[202px] md:h-[462px] lg:h-[462px]"  src={DigitalNomads} alt="" />
           
            <div className="mt-4 md:mt-0 lg:mt-0 ">
              <p className="text-[15px] md:text-[17px] lg:text-[17px] w-[230px] md:w-[600px] lg:w-[600px] mx-auto md:mx-0 lg:mx-0">
                “It‘s great to have Dropbox on board, helping our high
                performing team work efficiently and seamlessly.”
              </p>
              <p className=" my-3 md:my-5 lg:my-5 text-[14px]  md:text-[17px]  lg:text-[17px] hover:text-[18px] hover:right-3 font-semibold flex items-center gap-3 underline hover:underline-offset-2 w-[180px] md:w-full lg:w-full mx-auto md:mx-0 lg:mx-0">
                Read the full story <IoMdArrowForward className="text-xl " />
              </p>
              <div className="text-[13px]  md:text-[15px]  lg:text-[15px] w-[180px] md:w-full lg:w-full mx-auto md:mx-0 lg:mx-0">
                <p className="font-semibold">Zak Brown</p>
                <p className="text-[#A2A09E] mt-1">CEO of McLaren Racing</p>
              </div>
            </div>
          </div>
        </SwiperSlide>


               {/* swiper number--3 */}
               <SwiperSlide>
          <div className="w-[300px]  md:w-[1170px] lg:w-[1170px]  mx-auto lg:flex justify-between items-center">
       
            
              <img className="w-[300px] md:w-[462px] lg:w-[462px] h-[202px] md:h-[462px] lg:h-[462px]"  src={adamMontStory} alt="" />
           
            <div className="mt-4 md:mt-0 lg:mt-0 ">
              <p className="text-[15px] md:text-[17px] lg:text-[17px] w-[230px] md:w-[600px] lg:w-[600px] mx-auto md:mx-0 lg:mx-0">
              “Dropbox increased our team’s collaboration while working from home, which has increased our flexibility and could revolutionize our office culture.”
              </p>
              <p className=" my-3 md:my-5 lg:my-5 text-[14px]  md:text-[17px]  lg:text-[17px] hover:text-[18px] hover:right-3 font-semibold flex items-center gap-3 underline hover:underline-offset-2 w-[180px] md:w-full lg:w-full mx-auto md:mx-0 lg:mx-0">
                Read the full story <IoMdArrowForward className="text-xl " />
              </p>
              <div className="text-[13px]  md:text-[15px]  lg:text-[15px] w-[180px] md:w-full lg:w-full mx-auto md:mx-0 lg:mx-0">
                <p className="font-semibold">Adam Montgomery</p>
                <p className="text-[#A2A09E] mt-1">Senior Manager of Programming, Sundance Film Festival</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
              {/* swiper number--4 */}
              <SwiperSlide>
          <div className="w-[300px]  md:w-[1170px] lg:w-[1170px]  mx-auto lg:flex justify-between items-center">
       
            
              <img className="w-[300px] md:w-[462px] lg:w-[462px] h-[202px] md:h-[462px] lg:h-[462px]"  src={AnnKappesStory} alt="" />
           
            <div className="mt-4 md:mt-0 lg:mt-0 ">
              <p className="text-[15px] md:text-[17px] lg:text-[17px] w-[230px] md:w-[600px] lg:w-[600px] mx-auto md:mx-0 lg:mx-0">
              “We’re a grass-roots nonprofit. When we use a tool that the rest of the design world uses, it helps professionalize our organization.”
              </p>
              <p className=" my-3 md:my-5 lg:my-5 text-[14px]  md:text-[17px]  lg:text-[17px] hover:text-[18px] hover:right-3 font-semibold flex items-center gap-3 underline hover:underline-offset-2 w-[180px] md:w-full lg:w-full mx-auto md:mx-0 lg:mx-0">
                Read the full story <IoMdArrowForward className="text-xl " />
              </p>
              <div className="text-[13px]  md:text-[15px]  lg:text-[15px] w-[180px] md:w-full lg:w-full mx-auto md:mx-0 lg:mx-0">
                <p className="font-semibold">Ann Kappes</p>
                <p className="text-[#A2A09E] mt-1">Director of Art Partnerships at Creativity Explored</p>
              </div>
            </div>
          </div>
        </SwiperSlide>              {/* swiper number--5 */}
        <SwiperSlide>
          <div className="w-[300px]  md:w-[1170px] lg:w-[1170px]  mx-auto lg:flex justify-between items-center">
       
            
              <img className="w-[300px] md:w-[462px] lg:w-[462px] h-[202px] md:h-[462px] lg:h-[462px]"  src={MurrayBellStory} alt="" />
           
            <div className="mt-4 md:mt-0 lg:mt-0 ">
              <p className="text-[15px] md:text-[17px] lg:text-[17px] w-[230px] md:w-[600px] lg:w-[600px] mx-auto md:mx-0 lg:mx-0">
              “Dropbox easily allows me to transfer what’s in my mind to another person.”
              </p>
              <p className=" my-3 md:my-5 lg:my-5 text-[14px]  md:text-[17px]  lg:text-[17px] hover:text-[18px] hover:right-3 font-semibold flex items-center gap-3 underline hover:underline-offset-2 w-[180px] md:w-full lg:w-full mx-auto md:mx-0 lg:mx-0">
                Read the full story <IoMdArrowForward className="text-xl " />
              </p>
              <div className="text-[13px]  md:text-[15px]  lg:text-[15px] w-[180px] md:w-full lg:w-full mx-auto md:mx-0 lg:mx-0">
                <p className="font-semibold">Murray Bell</p>
                <p className="text-[#A2A09E] mt-1">Founder and Executive Creative Director of Semi Permanent</p>
              </div>
            </div>
          </div>
        </SwiperSlide>             {/* swiper number--6 */}
        <SwiperSlide>
          <div className="w-[300px]  md:w-[1170px] lg:w-[1170px]  mx-auto lg:flex justify-between items-center">
       
            
              <img className="w-[300px] md:w-[462px] lg:w-[462px] h-[202px] md:h-[462px] lg:h-[462px]"  src={AndiScullStory} alt="" />
           
            <div className="mt-4 md:mt-0 lg:mt-0 ">
              <p className="text-[15px] md:text-[17px] lg:text-[17px] w-[230px] md:w-[600px] lg:w-[600px] mx-auto md:mx-0 lg:mx-0">
              “Creative growth happens when you don’t have to worry about managing storage.”
              </p>
              <p className=" my-3 md:my-5 lg:my-5 text-[14px]  md:text-[17px]  lg:text-[17px] hover:text-[18px] hover:right-3 font-semibold flex items-center gap-3 underline hover:underline-offset-2 w-[180px] md:w-full lg:w-full mx-auto md:mx-0 lg:mx-0">
                Read the full story <IoMdArrowForward className="text-xl " />
              </p>
              <div className="text-[13px]  md:text-[15px]  lg:text-[15px] w-[180px] md:w-full lg:w-full mx-auto md:mx-0 lg:mx-0">
                <p className="font-semibold">Andi Scull</p>
                <p className="text-[#A2A09E] mt-1">Founder and Creative Director, HOPE Organization</p>
              </div>
            </div>
          </div>
        </SwiperSlide>             
          </Swiper>
    </div>
  );
};

export default HomePageStorySlider;
