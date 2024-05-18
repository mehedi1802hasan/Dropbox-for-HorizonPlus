import React from 'react';
import BlogPageNavbar from '../Components/BlogPageNavbar';
import BlogPageFooter from '../Components/BlogPageFooter';
import BlogPageBanner from '../Components/BlogPageBanner';

const BlogPage = () => {
    return (
        <div className=''>
            <BlogPageNavbar></BlogPageNavbar>
            <BlogPageBanner></BlogPageBanner>
            <BlogPageFooter></BlogPageFooter>
        </div>
    );
};

export default BlogPage;