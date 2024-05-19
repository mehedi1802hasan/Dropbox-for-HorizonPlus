import React from "react";
import BlogPageNavbar from "../Components/BlogPageNavbar";
import BlogPageFooter from "../Components/BlogPageFooter";
import BlogPageBanner from "../Components/BlogPageBanner";
import Blog from "../Components/Blog";

const BlogPage = () => {
  return (
    <div className="">
      <BlogPageNavbar></BlogPageNavbar>

      <BlogPageBanner></BlogPageBanner>
      <Blog></Blog>

      <BlogPageFooter></BlogPageFooter>
    </div>
  );
};

export default BlogPage;
