import React from "react";
import { Link } from "react-router-dom";
import { FaDropbox } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

const BlogPageNavbar = () => {
  return (
    <div className=" w-full   relative z-10  flex justify-center">
      <div className="navbar flex justify-between items-center w-[1300px] mx-auto  ">
        <div className=" ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link to="/">News </Link>
              <Link to="/">Work Culture</Link>
              <Link className="flex items-center gap-2" to="/">
                Made in Dropbox <MdKeyboardArrowDown />
              </Link>
              <Link className="flex items-center gap-2" to="/">
                Collections <MdKeyboardArrowDown />
              </Link>
              <Link className="flex items-center gap-2" to="/">
                Tech blog <MdArrowOutward />
              </Link>
              <Link to="/">
                <CiSearch />
              </Link>
            </ul>
          </div>
          <div className=" flex items-center gap-4">
            <h3 className=" w-11 p-2 ">
              <FaDropbox className=" w-full mx-auto text-3xl " />
            </h3>
            <Link to="/" className="text-[20px] font-bold">
              work in progress
            </Link>
          </div>
        </div>

        <div className="">
          <div className="mr-7 mt-1 gap-7 font-medium hidden lg:flex text-[16px]">
            <Link >News </Link>
            <Link >Work Culture</Link>
            <Link className="flex items-center gap-2" >
              Made in Dropbox <MdKeyboardArrowDown />
            </Link>
            <Link className="flex items-center gap-2" >
              Collections <MdKeyboardArrowDown />
            </Link>
            <Link className="flex items-center gap-2" >
              Tech blog <MdArrowOutward />
            </Link>
            <Link >
              <CiSearch className="text-xl mt-[2px] font-bold text-black" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPageNavbar;
