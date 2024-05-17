import React from 'react';
import teamsUi from '../../assets/teamsUi.png';
import professionalsUi from '../../assets/professionalsUi.png';
import { IoArrowForward } from "react-icons/io5";

const HowUseDropbox = () => {
    return (
        <div >
              <p className='text-[35px] text-center font-bold'>How will you use Dropbox?

</p>
            
            <div className='flex justify-center gap-4 px-12  mt-20'>
                <div className='bg-[#2B2929]' >
                    <img src={teamsUi} alt="" />
<div className='ml-10'>
<p className='text-2xl font-semibold my-12'>For work</p>
                    <p>Work efficiently with teammates and clients, stay in sync on projects, and keep company data safe—all in one place.</p>
                    <div className="text-center   ">
        <button className="bg-[#5994f3] hover:bg-[#598de0] rounded-xl text-black text-[16px] font-semibold px-7  py-[16px] text-center flex justify-center items-center gap-7 my-12 ">
          <p className="font-bold"> Get Dropbox for work</p> <IoArrowForward />
        </button>
      </div>
</div>
                </div>



                <div className='bg-[#2B2929]' >
                    <img src={professionalsUi} alt="" />
<div className='ml-10'>
<p className='text-2xl font-semibold my-12'>For personal use</p>
                    <p>Keep everything that’s important to you and your family shareable and safe in one place. Back up files in the cloud, share photos and videos, and more.</p>
                    <div className="text-center   ">
        <button className="bg-[#5994f3] hover:bg-[#598de0] rounded-xl text-black text-[16px] font-semibold px-7  py-[16px] text-center flex justify-center items-center gap-7 my-12 ">
          <p className="font-bold"> Get Dropbox for personal use</p> <IoArrowForward />
        </button>
      </div>
</div>
                </div>
            </div>
        </div>
    );
};

export default HowUseDropbox;