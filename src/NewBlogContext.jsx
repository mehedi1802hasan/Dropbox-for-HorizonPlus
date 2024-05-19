import React, { createContext, useState, useEffect } from 'react';

// Create a context
export const BlogContext = createContext();

// Create a provider component
export const BlogProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([]);

    // Load blogs from localStorage on component mount
    useEffect(() => {
        const savedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
        setBlogs(savedBlogs);
    }, []);

    // Save blogs to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('blogs', JSON.stringify(blogs));
    }, [blogs]);

    const addBlog = (blog) => {
        setBlogs([...blogs, blog]);
    };

    return (
        <BlogContext.Provider value={{ blogs, addBlog }}>
            {children}
        </BlogContext.Provider>
    );
};
