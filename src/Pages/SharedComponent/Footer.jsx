import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook  } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { RiArrowRightSLine } from "react-icons/ri";

const Footer = () => {
    return (
      <div className='p-20 bg-[#000000]'>
          <footer className="footer grid-cols-2 lg:grid-cols-6  text-neutral-content">
        <nav>
          <h6 className=" text-xl font-bold text-white mb-1">Dropbox</h6> 
          <Link className="link link-hover">Desktop app</Link>
          <Link className="link link-hover">Mobile app</Link>
          <Link className="link link-hover">Integrations</Link>
          <Link className="link link-hover">Features</Link>
          <Link className="link link-hover">Solutions</Link>
          <Link className="link link-hover">Security</Link>
          <Link className="link link-hover">Early access</Link>
          <Link className="link link-hover">Templates</Link>
        </nav> 
        <nav>
        <h6 className=" text-xl font-bold text-white mb-1">Products</h6> 
          <Link className="link link-hover">Plus</Link>
          <Link className="link link-hover">Professional</Link>
          <Link className="link link-hover">Business</Link>
          <Link className="link link-hover">Enterprise</Link>
          <Link className="link link-hover">Dash (beta)</Link>
          <Link className="link link-hover">Dropbox Sign</Link>
          <Link className="link link-hover">DocSend</Link>
          <Link className="link link-hover">Plans</Link>
          <Link className="link link-hover">Product updates</Link>
        </nav> 
        <nav>
        <h6 className=" text-xl font-bold text-white mb-1">Features</h6> 
          <Link className="link link-hover">Send large files</Link>
          <Link className="link link-hover">Send long videos</Link>
          <Link className="link link-hover">Cloud photo storage</Link>
          <Link className="link link-hover">Secure file transfer </Link>
          <Link className="link link-hover">Password manager </Link>
          <Link className="link link-hover">Cloud backup </Link>
          <Link className="link link-hover">Edit PDFs </Link>
          <Link className="link link-hover">Electronic signatures </Link>
          <Link className="link link-hover">Screen recorder </Link>
          <Link className="link link-hover">Convert to PDF </Link>
        </nav> 
        <nav>
        <h6 className=" text-xl font-bold text-white mb-1">Support</h6> 
          <Link className="link link-hover">Help center</Link>
          <Link className="link link-hover">Contact us</Link>
          <Link className="link link-hover">Privacy & terms</Link>
          <Link className="link link-hover">Cookie policy</Link>
          <Link className="link link-hover">Cookies & CCPA preferences</Link>
          <Link className="link link-hover">AI principles</Link>
          <Link className="link link-hover">Sitemap</Link>
          <Link className="link link-hover">Learning resources</Link>
        </nav> 
        <nav>
        <h6 className=" text-xl font-bold text-white mb-1">Resources</h6> 
          <Link className="link link-hover">Blog</Link>
          <Link className="link link-hover">Customer stories</Link>
          <Link className="link link-hover">Resources library</Link>
          <Link className="link link-hover">Developers</Link>
          <Link className="link link-hover">Community forums</Link>
          <Link className="link link-hover">Referrals</Link>
          <Link className="link link-hover">Reseller partners</Link>
          <Link className="link link-hover">Integration partners</Link>
          <Link className="link link-hover">Find a partner</Link>
        </nav> 
        <nav>
        <h6 className=" text-xl font-bold text-white mb-1">Company</h6> 
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Jobs</Link>
          <Link className="link link-hover">Investor relations</Link>
          <Link className="link link-hover">ESG</Link>
        </nav>
      </footer>
      <div className='flex items-center gap-7 my-9' >
      <BsTwitterX   className='  text-3xl  text-white' />
      <FaFacebook  className='  text-3xl  text-white' />
      <BsYoutube   className='  text-2xl  text-white' />

      </div>
      <div className=" w-[180px] divider divider-neutral"></div>
      <div>
<div className='text-white  flex  items-center gap-4'>
<div className='flex items-center gap-[2px] '>
<TbWorld className="text-xl" />
    <p>English (United States)</p>
</div>
    <RiArrowRightSLine className='text-2xl'  />
</div>
      </div>
      </div>
    );
};

export default Footer;