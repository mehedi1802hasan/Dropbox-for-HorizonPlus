import React from 'react';
import { Link } from 'react-router-dom';


const BlogPageFooter = () => {
    return (
      <div className='p-20 bg-[#000000]'>
          <footer className="footer grid-cols-2 lg:grid-cols-5  text-white">
        <nav>
          <h6 className=" text-[16px] font-bold text-white mb-1">Dropbox</h6> 
          <Link className="link link-hover">Plus</Link>
          <Link className="link link-hover">Professional</Link>
          <Link className="link link-hover">Business</Link>
          <Link className="link link-hover">Enterprise</Link>
          <Link className="link link-hover">HelloSign</Link>
          <Link className="link link-hover">DocSend</Link>
          <Link className="link link-hover">Plans</Link>
        </nav> 
        <nav>
        <h6 className=" text-[16px] font-bold text-white mb-1">Using Dropbox</h6> 
          <Link className="link link-hover">Help center</Link>
          <Link className="link link-hover">Security</Link>
          <Link className="link link-hover">Features</Link>
          <Link className="link link-hover">Productivity</Link>
          <Link className="link link-hover">Apps and integrations</Link>
          
        </nav> 
        <nav>
        <h6 className=" text-[16px] font-bold text-white mb-1">Company</h6> 
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Investor relations</Link>
          <Link className="link link-hover">Company info </Link>
          <Link className="link link-hover">Jobs </Link>
          
        </nav> 
        <nav>
        <h6 className="text-[16px] font-bold text-white mb-1">Downloads</h6> 
          <Link className="link link-hover">Desktop apps</Link>
          <Link className="link link-hover">Mobile apps</Link>
         
        </nav> 
        <nav>
        <h6 className=" text-[16px] font-bold text-white mb-1">Legal</h6> 
          <Link className="link link-hover">Privacy</Link>
          <Link className="link link-hover">Terms</Link>
          <Link className="link link-hover">Cookies</Link>
         
        </nav> 
       
      </footer>
    
      <div className=" w-[180px] divider divider-neutral"></div>
     <div>
     <footer className="footer grid-cols-2 lg:grid-cols-5  text-white">
        <p>Read our blogs</p>
        <p className='lg:w-[720px]'>Please note: Sometimes we blog about upcoming products or features before they're released, but timing and exact functionality of these features may change from what's shared here. The decision to purchase our services should be made based on features that are currently available.</p>
        </footer>
     </div>
      </div>
    );
};

export default BlogPageFooter;