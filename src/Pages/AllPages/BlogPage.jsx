import React from "react";
import BlogPageNavbar from "../Components/BlogPageNavbar";
import BlogPageFooter from "../Components/BlogPageFooter";
import BlogPageBanner from "../Components/BlogPageBanner";
import Blog from "../Components/Blog";
import Insight from "../Components/Insight";
import CustomerStories from "../Components/CustomerStories";
import WorkedCulture from "../Components/WorkedCulture";
import News from "../Components/News";
import FeatureCollection from "../Components/FeatureCollection";

const BlogPage = () => {
  return (
    <div className="">
      <BlogPageNavbar />
      <div className="">
        <BlogPageBanner />
        <div className="">
          <Blog />
          <Insight />
          <CustomerStories />
          <FeatureCollection></FeatureCollection>
          <WorkedCulture />
          <News />
          <BlogPageFooter />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
