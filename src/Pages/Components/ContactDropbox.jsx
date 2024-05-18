import React from 'react';
import help from '../../assets/help.svg';
import customerSupport from '../../assets/customerSupport.svg';
import developerSupport from '../../assets/developerSupport.svg';
import resellers from '../../assets/resellers.svg';
import brandGuidline from '../../assets/brandGuidline.svg';
import pressIncuiries from '../../assets/pressIncuiries.svg';
import selesContact from '../../assets/selesContact.svg';
import emailOtherRequest from '../../assets/emailOtherRequest.svg';
import { IoArrowForward } from "react-icons/io5";

const ContactDropbox = () => {
    return (
        <div className='bg-[#F7F5F2]'>
          <div className='w-[1170px] mx-auto '>
            <p className='text-center text-[32px]  font-space_grotesk py-12'> Contact Dropbox</p>
            <div className='grid grid-cols-2 lg:grid-cols-4   gap-12 pb-14'>

              {/* number 1 div */}
              <div>
                <img className='w-[50px] h-[50px]' src={help} alt="" />
                <p className='text-[22px] font-semibold'>Help Center</p>
                <p className='text-[16px] w-[250px] my-3 '>Find help articles and tips on how to use Dropbox.</p>
                <div className='flex gap-4 items-center '>
                    <p className='underline font-semibold text-[17px]'>Visit Help Center</p>
                    <p><IoArrowForward/></p>
                </div>
              </div>
                    {/* number 2 div */}
                    <div>
                <img className='w-[50px] h-[50px]' src={customerSupport} alt="" />
                <p className='text-[22px] font-semibold'>Customer Support</p>
                <p className='text-[16px] w-[150px] my-3 '>Contact us for all support requests.</p>
                <div className='flex gap-4 items-center '>
                    <p className='underline font-semibold text-[17px]'>Contact Customer Support</p>
                    <p><IoArrowForward/></p>
                </div>
              </div>
                          {/* number 3 div */}
                          <div>
                <img className='w-[50px] h-[50px]' src={developerSupport} alt="" />
                <p className='text-[22px] font-semibold'>Developer Support</p>
                <p className='text-[16px] w-[250px] my-3 '>Contact our API and platform support team.</p>
                <div className='flex gap-4 items-center '>
                    <p className='underline font-semibold text-[17px]'>Contact Developer Support
</p>
                    <p><IoArrowForward/></p>
                </div>
              </div>
                                {/* number 4 div */}
                                <div>
                <img className='w-[50px] h-[50px]' src={resellers} alt="" />
                <p className='text-[22px] font-semibold'>Resellers</p>
                <p className='text-[16px] w-[250px] my-3 '>Join the Dropbox Partner Network.</p>
                <div className='flex gap-4  mt-1 '>
                    <p className='underline font-semibold text-[17px]'>Join the Dropbox Partner Network</p>
                    <p><IoArrowForward className='mt-3'/></p>
                </div>
              </div>                                      {/* number 5 div */}
              <div>
                <img className='w-[50px] h-[50px]' src={brandGuidline} alt="" />
                <p className='text-[22px] font-semibold'>Brand Guidelines</p>
                <p className='text-[16px] w-[250px] my-3 '>Contact us about logo or brand usage.</p>
                <div className='flex gap-4 '>
                    <p className='underline font-semibold text-[17px]'>Learn more about our brand guidelines</p>
                    <p><IoArrowForward className='mt-3'/></p>
                </div>
              </div>
                                            {/* number 6 div */}
                                            <div>
                <img className='w-[50px] h-[50px]' src={pressIncuiries} alt="" />
                <p className='text-[22px] font-semibold'>Press Inquiries</p>
                <p className='text-[16px] w-[150px] my-3 '>Contact our press and media team.</p>
                <div className='flex gap-4 '>
                    <p className='underline font-semibold text-[17px]'>Contact our press and media team</p>
                    <p><IoArrowForward className='mt-3'/></p>
                </div>
              </div>
                                                  {/* number 7 div */}

                                                  <div>
                <img className='w-[50px] h-[50px]' src={selesContact} alt="" />
                <p className='text-[22px] font-semibold'>Sales Contact</p>
                <p className='text-[16px] w-[250px] my-3 '>FContact sales about purchasing Dropbox Business.</p>
                <div className='flex gap-4 items-center '>
                    <p className='underline font-semibold text-[17px]'>Contact our sales team</p>
                    <p><IoArrowForward/></p>
                </div>
              </div>
                                                        {/* number 8 div */}
                                                        <div>
                <img className='w-[50px] h-[50px]' src={emailOtherRequest} alt="" />
                <p className='text-[22px] font-semibold'>Other Requests</p>
                <p className='text-[16px] w-[250px] my-3 '>Can’t find the right category here? Submit a general contact request..</p>
                <div className='flex gap-4  '>
                    <p className='underline font-semibold text-[17px]'>Submit a general contact request</p>
                    <p><IoArrowForward className='mt-3'/></p>
                </div>
              </div>

            </div>
          </div>
        </div>
    );
};

export default ContactDropbox;