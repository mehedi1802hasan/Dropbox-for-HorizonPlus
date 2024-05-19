import React from "react";
import BlogPageNavbar from "../Components/BlogPageNavbar";
import BlogPageFooter from "../Components/BlogPageFooter";
import BlogPageBanner from "../Components/BlogPageBanner";
import Blog from "../Components/Blog";
import Insight from "../Components/Insight";
import CustomerStories from "../Components/CustomerStories";

const BlogPage = () => {
  return (
    <div className="">
      <BlogPageNavbar></BlogPageNavbar>
      <BlogPageBanner></BlogPageBanner>
      <Blog></Blog>
      <Insight></Insight>
      <CustomerStories></CustomerStories>
      <BlogPageFooter></BlogPageFooter>

    </div>
  );
};

export default BlogPage;
