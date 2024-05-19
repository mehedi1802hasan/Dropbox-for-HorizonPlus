import React from "react";
import { Link } from "react-router-dom";
import { FaDropbox } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Navbar = () => {
  return (
   <div className=" w-full bg-base-100 z-10 fixed border flex justify-center">
     <div className="navbar w-[1300px] mx-auto  ">
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
            <Link to='/'>Products</Link>
              <Link to='/'>Solution</Link>
              <Link to='/'>Enterprise</Link>
              <Link to='/'>Pricing</Link>
              <Link to='/'>Cantact sales</Link>
              <Link to='/'>Get app</Link>
              <Link to='/'>Sign up</Link>
              <Link to='/'>Login</Link>
          </ul>
        </div>
        <div className=" flex items-center gap-2">
          <h3 className="bg-[#0061FE] w-11 p-2 ">
            <FaDropbox className="text-white w-full mx-auto text-2xl " />
          </h3>
          <Link to="/" className="text-2xl font-bold">
            Dropbox{" "}
          </Link>
        </div>{" "}
        <div className="ml-7 mt-1 gap-7 font-medium hidden lg:flex">
        
            
        <Link to='/'>Products</Link>
              <Link to='/'>Solution</Link>
              <Link to='/'>Enterprise</Link>
              <Link to='/'>Pricing</Link>
         

           
          
           
         
        </div>
      </div>

      <div className="navbar-end">

      <div className="mr-7 mt-1 gap-7 font-medium hidden lg:flex">
     <Link to='/'><TbWorld className="text-2xl" />
</Link>
      <Link to='/'>Cantact sales</Link>
              <Link to='/'>Get app</Link>
              <Link to='/'>Sign up</Link>
              <Link to='/'>Login</Link>
  </div>
        <Link className="bg-[#2f79f0] hover:bg-[#2064d3] text-white px-4 py-2 rounded-xl font-semibold">Get started</Link>
      </div>
    </div>
   </div>
  );
};

export default Navbar;
