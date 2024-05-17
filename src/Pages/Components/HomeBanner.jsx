import React from "react";
import DropboxBanner from '../../assets/dropboxBannerVideo.mp4';

const HomeBanner = () => {
  return (
    <div className="bg-black text-white py-12">
      <div>
        <p className="text-center">Join over 700 million registered users who trust Dropbox</p>
        <p className="text-center">
          Easy to use, reliable, private, and secure. It’s no wonder Dropbox is
          the choice for storing and sharing your most important files.
        </p>
<div  className="text-center flex justify-center ">
<button className="text-center flex justify-center ">Find Plan</button>
</div>        <div className="flex justify-center items-center gap-3">
          <input type="text" /> <button>Emaial</button>
        </div>
        <div className=" w-full h-full">
          <video
            className=" w-full h-full object-cover"
            src={DropboxBanner}
            autoPlay
            loop
            muted
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
