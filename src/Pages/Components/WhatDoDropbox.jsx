import React from "react";
import CollaborateDarks from "../../assets/CollaborateDark.svg";
import ManageBusinessDark from "../../assets/ManageBusinessDark.svg";
import ProtectFilesDark from "../../assets/ProtectFilesDark.svg";
import SharedContentDark from "../../assets/SharedContentDark.svg";
const WhatDoDropbox = () => {
  return (
    <div>
      <p className="text-[20px] md:text-[35px] lg:text-[35px] text-center font-bold">
        What can you do with Dropbox?
      </p>
      <div className="w-[200px] md:w-[1200px] lg:w-[1200px] mx-auto py-20">
        <div className="gap-6 md:gap-20 lg:gap-20 grid grid-cols-1 lg:grid-cols-4   mx-auto md:w-[1200px] lg:w-[1200px]  ">
          <div className=" w-[240px]">
            <img src={ProtectFilesDark} alt="" />
            <p className="text-[19px] md:text-[22px] lg:text-[22px] my-[14px] font-semibold ">
              Store and protect your files
            </p>
            <p className="">
              Get the storage you and your teams need with security features
              like file recovery, password protection, watermarking, and viewer
              history.
            </p>
          </div>
          <div className=" w-[240px]">
            <img src={SharedContentDark} alt="" />
            <p className="text-[22px] my-[14px] font-semibold ">
              Stay in control of shared content
            </p>
            <p className="">
              Trackable links show when someone has opened a shared file and how
              long they’ve engaged with it. Plus, you can turn off access for
              any individual at any time without affecting others’ permissions.
            </p>
          </div>
          <div className=" w-[240px]">
            <img src={CollaborateDarks} alt="" />
            <p className="text-2xl my-[14px] font-semibold">
              Collaborate on your work
            </p>
            <p className="">
              Directly edit PDFs and use video tools to streamline feedback and
              approval processes.
            </p>
          </div>
          <div className=" w-[240px]">
            <img src={ManageBusinessDark} alt="" />
            <p className="text-2xl my-[14px] font-semibold">
              Manage your business
            </p>
            <p className="">
              Automate manual processes with tools like eSignature templates,
              which let you reuse documents in seconds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatDoDropbox;
