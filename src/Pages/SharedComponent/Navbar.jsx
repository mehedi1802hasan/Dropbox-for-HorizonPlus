import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaDropbox } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { RiArrowDownSLine } from "react-icons/ri";
import Dropbox from "../../assets/Dropbox-logo-nav.svg";
import dashlogonav from "../../assets/dash-logo-nav.svg";
import replay from "../../assets/replay-logo-nav.svg";
import DocSend from "../../assets/DocSend-logo-nav.svg";
import Backup from "../../assets/Backup-logo-nav.svg";
import sign from "../../assets/dropbox-sign-logo.svg";
import Capture from "../../assets/Capture-logo-nav.svg";
import arrowright from "../../assets/arrow_right.svg";
const Navbar = () => {
  const [isProductHovered, setIsProductHovered] = useState(false);
  const [isSolutionHovered, setIsSolutionHovered] = useState(false);

  return (
    <div
      className={`w-full bg-[#FFFFFF] z-10 fixed border flex justify-center transition-all ${
        isProductHovered ? "h-[470px]" : "h-[70px]"
      } ${isSolutionHovered ? "h-[340px]" : "h-[70px]"}`}
    >
      <div className="navbar fixed w-[1300px] mx-auto  text-[14px] text-black">
        <div className="navbar-start ">
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
              <Link to="/">Products</Link>
              <Link to="/">Solution</Link>
              <Link to="/">Enterprise</Link>
              <Link to="/">Pricing</Link>
              <Link to="/">Cantact sales</Link>
              <Link to="/">Get app</Link>
              <Link to="/">Sign up</Link>
              <Link to="/">Login</Link>
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <h3 className="bg-[#0061FE] w-11 p-2">
              <FaDropbox className="text-white w-full mx-auto text-2xl " />
            </h3>
            <Link to="/" className="text-2xl font-bold">
              Dropbox{" "}
            </Link>
          </div>{" "}
          <div className="ml-7 mt-1 gap-7 font-medium hidden lg:flex">
            <Link
              className="flex items-center gap-2"
              to="/"
              onMouseEnter={() => setIsProductHovered(true)}
              onMouseLeave={() => setIsProductHovered(false)}
            >
              Products <RiArrowDownSLine className="text-xl" />
            </Link>
            <Link
              className="flex items-center gap-2"
              onMouseEnter={() => setIsSolutionHovered(true)}
              onMouseLeave={() => setIsSolutionHovered(false)}
              to="/"
            >
              Solution <RiArrowDownSLine className="text-xl" />
            </Link>
            <Link to="/">Enterprise</Link>
            <Link to="/">Pricing</Link>
          </div>
        </div>

        <div className="navbar-end">
          <div className="mr-7 mt-1 gap-7 font-medium hidden lg:flex">
            <Link to="/">
              <TbWorld className="text-xl text-[#1E1919]" />{" "}
            </Link>
            <Link to="/">Cantact sales</Link>
            <Link to="/">Get app</Link>
            <Link to="/">Sign up</Link>
            <Link to="/">Login</Link>
          </div>
          <Link className="bg-[#2f79f0] hover:bg-[#2064d3] text-white px-4 py-2 rounded-xl font-semibold">
            Get started
          </Link>
        </div>
      </div>
      {isProductHovered && (
        <div className="absolute  top-16 bg-[#FFFFFF] p-4 text-sm text-gray-700">
          <div className="grid grid-cols-2 gap-x-12 gap-y-6 mr-[550px]">
            <div className="flex gap-3">
              <div>
                <img className="w-[32px] h-[32px]" src={Dropbox} alt="" />
              </div>
              <div>
                <p className="text-[17px] font-semibold">Dropbox</p>
                <p className="w-[120px] text-[14px] mt-2 ">
                  store,share,access file across device
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div>
                <img className="w-[32px] h-[32px]" src={dashlogonav} alt="" />
              </div>
              <div>
                <p className="text-[17px] font-semibold">Dash (beta)</p>
                <p className="w-[120px] text-[14px] mt-2 ">
                  store,share,access file across device
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div>
                <img className="w-[32px] h-[32px]" src={replay} alt="" />
              </div>
              <div>
                <p className="text-[17px] font-semibold">replay</p>
                <p className="w-[120px] text-[14px] mt-2 ">
                  store,share,access file across device
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div>
                <img className="w-[32px] h-[32px]" src={DocSend} alt="" />
              </div>
              <div>
                <p className="text-[17px] font-semibold">DocSend</p>
                <p className="w-[120px] text-[14px] mt-2 ">
                  store,share,access file across device
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div>
                <img className="w-[32px] h-[32px]" src={Backup} alt="" />
              </div>
              <div>
                <p className="text-[17px] font-semibold">Backup</p>
                <p className="w-[120px] text-[14px] mt-2 ">
                  store,share,access file across device
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div>
                <img className="w-[32px] h-[32px]" src={sign} alt="" />
              </div>
              <div>
                <p className="text-[17px] font-semibold">sign</p>
                <p className="w-[120px] text-[14px] mt-2 ">
                  store,share,access file across device
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div>
                <img className="w-[32px] h-[32px]" src={Capture} alt="" />
              </div>
              <div>
                <p className="text-[17px] font-semibold">Capture</p>
                <p className="w-[120px] text-[14px] mt-2 ">
                  store,share,access file across device
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div>
                <img className="w-[32px] h-[32px]" src={arrowright} alt="" />
              </div>
              <div>
                <p className="text-[17px] font-semibold">Early access</p>
                <p className="w-[120px] text-[14px] mt-2 ">
                  store,share,access file across device
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {isSolutionHovered && (
        <div
          className="absolute  top-16 bg-[#FFFFFF] p-4 text-[16px] text-black 
       font-normal "
        >
          <div className="grid grid-cols-3 gap-x-10 gap-y-6 mr-[230px]">
            <p className="text-gray-500">Teams</p>
            <p className="text-gray-500">Use cases</p>
            <p className="text-gray-500">Industies</p>
            <p>sales</p>
            <p>storage</p>
            <p>Construction</p>
            <p>Marketing</p>
            <p>Video Review</p>
            <p>Technology</p>
            <p>HR</p>
            <p>Signing document </p>
            <p>Manufuctaring</p>
            <p>IT</p>
            <p>Sending File</p>
            <p>Medis</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
