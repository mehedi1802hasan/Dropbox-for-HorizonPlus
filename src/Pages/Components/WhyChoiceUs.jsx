import React from "react";

const WhyChoiceUs = () => {
  return (
    <div className="w-[300px] md:w-[1200px] lg:w-[1200px] mx-auto  py-16">
      <p className="text-[20px] md:text-[35px] lg:text-[35px] text-center font-bold">
        Cloud storage you can count on
      </p>

      <div className="lg:mt-12 md:mt-12 mt-5  gap-[30px] md:gap-[102px]lg:gap-[102px] grid grid-cols-1 lg:grid-cols-3 ">
        <div className="w-[200px]  md:w-[340px] lg:w-[340px] mx-auto lg:mx-0 md:mx-0">
          <p className="text-[22px] md:text-[40px] lg:text-[40px] font-bold text-center md:text-start lg:text-start">1B+</p>
          <p className="text-xl md:text-2xl lg:text-2xl mt-2 mb-3 text-center md:text-start lg:text-start">mobile app downloads</p>
          <p className="text-center md:text-start lg:text-start">
            with Editors’ Choice Awards from the Google Play and Apple App
            Store.
          </p>
        </div>
        <div className="w-[200px]  md:w-[340px] lg:w-[340px] mx-auto lg:mx-0 md:mx-0">
          <p className="text-[22px] md:text-[40px] lg:text-[40px] font-bold text-center md:text-start lg:text-start">575k+</p>
          <p className="text-xl md:text-2xl lg:text-2xl mt-2 mb-3 text-center md:text-start lg:text-start">teams globally</p>
          <p className="text-center md:text-start lg:text-start">
            use Dropbox to share work, safeguard content, and grow their
            business.
          </p>
        </div>
        <div className="w-[200px]  md:w-[340px] lg:w-[340px] mx-auto lg:mx-0 md:mx-0">
          <p className="text-[22px] md:text-[40px] lg:text-[40px] font-bold text-center md:text-start lg:text-start">4.5B</p>
          <p className="text-xl md:text-2xl lg:text-2xl mt-2 mb-3 text-center md:text-start lg:text-start">connections and counting</p>
          <p className="text-center md:text-start lg:text-start">created through Dropbox file sharing.</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoiceUs;
