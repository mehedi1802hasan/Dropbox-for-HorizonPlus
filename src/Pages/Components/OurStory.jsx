import React from "react";
import { Link } from "react-router-dom";

const OurStory = () => {
  return (
    <div className="bg-[#F7F5F2] py-5 md:py-14 lg:py-14">
      <div>
        <p className="text-center text-[23px] md:text-[32px] lg:text-[32px] font-semibold">Our story</p>
        <div className="w-[230px] lg:w-[630px] md:w-[630px] mx-auto text-[15px] mt-5 md:mt-12 lg:mt-12">
          <p>
            Back in 2007, making work better for people meant designing a
            simpler way to keep files in sync. Today, it means designing
            products that reduce busywork so you can focus on the work that
            matters.
          </p>
          <p className="my-4">
            Most “productivity tools” get in your way. They constantly ping,
            distract, and disrupt your team’s flow, so you spend your days
            switching between apps and tracking down feedback. It’s busywork,
            not the meaningful stuff. We want to change this.
          </p>
          <p>
            We believe there’s a more enlightened way to work. Dropbox helps
            people be organized, stay focused, and get in sync with their teams.
            <Link className="text-[#4F61FE]"> Learn more.</Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
