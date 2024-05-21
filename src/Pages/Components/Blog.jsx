import React, { useContext, useState } from "react";
import abdiaidid from "../../assets/abdiaidid.png";
import Workslower from "../../assets/Workslower.png";
import AugXhero from "../../assets/AugXhero.png";
import robo from "../../assets/robo.png";
import aiSpottingm from "../../assets/aiSpottingm.gif";
import AddBlogModal from "./AddBlogModal";
import { BlogContext } from "../../NewBlogContext";
const Blog = () => {
  const [isAdd, setIsAdd] = useState(false);
  const handleAddBlog = () => {
    setIsAdd(true);
  };
  const { blogs } = useContext(BlogContext);
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
    <div className="text-black lg:pb-52 pt-16 md:pt-52 lg:pt-32  ">
      <div className="">
        <div
          onClick={() => handleAddBlog()}
          className=" animate-bounce flex mb-12 justify-end w-[300px] md:w-[1100px]  lg:w-[1100px]  mx-auto "
        >
          <button className=" border-red-600  border-2 px-8 py-3  rounded-sm hover:border-red-400  hover:bg-green-600 font-bold hover:text-white  ">
            Add Blog
          </button>
        </div>

        {/* Daynamic blogs */}
        <div className="blog-list grid grid-cols-2  mb-24 gap-y-1 md:gap-y-20 lg:gap-y-20 w-[300px] md:w-[1070px] lg:w-[1070px] mx-auto">
          {blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <div key={index} className="blog-item  p-4 mb-4 rounded">
              <div style={{ position: 'relative' }} onMouseMove={handleMouseMove}>  <img
                  src={blog.image}
                  alt={blog.name}
                  className="lg:w-[337px] lg:h-[211px] mt-2 hover:cursor-none"  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />    {isHovering && (
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
                    <span className="bg-black text-white  text-xl  md:text-4xl lg:text-4xl">Read</span>
                  </div>
                )} </div>
                <p className="mt-6 mb-4 hover:underline text-[22px] font-bold w-[200px] md:w-[400px] lg:w-[400px] text-black">
                  {blog.title}
                </p>
                <p className="text-[15px] hover:underline">{blog.type}</p>
              </div>
            ))
          ) : (
            <p></p>
          )}
        </div>

        <div className="  lg:flex  justify-center gap-28">
          {/* 1st static blog */}
          <div className="mt-6">
            <div style={{ position: "relative" }} onMouseMove={handleMouseMove}>
              <img
                className=" w-[204px] md:w-[464px] lg:w-[464px]  mx-auto lg:mx-0   h-[164px] md:h-[464px] lg:h-[464px] hover:cursor-none"
                src={abdiaidid}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                alt=""
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
                  <span className="bg-black text-white text-xl md:text-4xl lg:text-4xl">Read</span>
                </div>
              )}
            </div>
            <p className="mt-6 mb-4 hover:underline text-[22px] font-bold w-[290px] md:w-[400px] lg:w-[400px] mx-auto lg:mx-0 text-black">
              Abdi Aidid on being your most creative, dynamic self
            </p>
            <p className="text-[15px] hover:underline text-center lg:text-start md:text-start">Podcast</p>
          </div>
          {/* 2nd static blog */}
          <div className="my-10 md:mt-0 lg:mt-0">
            <div style={{ position: "relative" }} onMouseMove={handleMouseMove}>
              <img
                className=" w-[204px] md:w-[506px] lg:w-[506px]  mx-auto lg:mx-0   h-[164px] md:h-[510px] lg:h-[510px] hover:cursor-none "
                src={Workslower}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                alt=""
              />{" "}
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
              )}{" "}
            </div>
            <p className="mt-6 mb-4 hover:underline text-[22px] font-bold w-[290px] md:w-[400px] lg:w-[400px] mx-auto lg:mx-0 text-black">
              Abdi Aidid on being your most creative, dynamic self
            </p>
            <p className="text-[15px] hover:underline text-center lg:text-start md:text-start">Podcast</p>
          </div>
        </div>
        <div className="mt-28 w-[300px] md:w-[1170px] lg:w-[1170px] mx-auto lg:flex  justify-between  gap-8">
          {/* 3rd static blog */}
          <div className="mt-6">
            <div style={{ position: "relative" }} onMouseMove={handleMouseMove}>
           
              <img
                className="w-[204px] md:w-[337px] lg:w-[337px]  mx-auto lg:mx-0   h-[164px] md:h-[211px] lg:h-[211px] hover:cursor-none"
                src={AugXhero}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                alt=""
              />{" "}
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
              )}{" "}
            </div>
            <p className="mt-6 mb-4 hover:underline text-[22px] font-bold w-[290px] md:w-[270px] lg:w-[270px] mx-auto lg:mx-0    lg:leading-[25px] text-black">
              How Aug X Labs made video creation less of a chore, more of a game
            </p>
            <p className="text-[15px] hover:underline text-center lg:text-start md:text-start">Customer Stories</p>
          </div>
          {/*4th static blog */}

          <div className="my-10 md:mt-0 lg:mt-0">
            <div style={{ position: "relative" }} onMouseMove={handleMouseMove}>
              
              <img
                className="w-[204px] md:w-[337px] lg:w-[337px]  mx-auto lg:mx-0   h-[164px] md:h-[337px] lg:h-[337px] hover:cursor-none"
                src={robo}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                alt=""
              />{" "}
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
              )}{" "}
            </div>
            <p className="mt-6 mb-4 hover:underline text-[22px] font-bold w-[290px] md:w-[300px] lg:w-[300px] mx-auto lg:mx-0 text-black">
              Will robots give us more "me" time?
            </p>
            <p className="text-[15px] hover:underline text-center lg:text-start md:text-start">Work Culture</p>
          </div>

          {/*5th static blog */}
          <div>
            <div style={{ position: "relative" }} onMouseMove={handleMouseMove}>
           
              <img
                className="w-[204px] md:w-[337px] lg:w-[337px]  mx-auto lg:mx-0   h-[164px] md:h-[337px] lg:h-[337px]  hover:cursor-none"
                src={aiSpottingm}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                alt=""
              />{" "}
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
              )}{" "}
            </div>
            <p className="mt-6 mb-4 hover:underline text-[22px] font-bold w-[290px] md:w-[240px] lg:w-[240px] mx-auto lg:mx-0 text-black">
              How AI is spotting manatees in the wild
            </p>
            <p className="text-[15px] hover:underline text-center lg:text-start md:text-start">Work Culture</p>
          </div>
        </div>
      </div>
      <AddBlogModal isAdd={isAdd} setIsAdd={setIsAdd}></AddBlogModal>
    </div>
  );
};

export default Blog;
