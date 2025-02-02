import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../axios';
import '../assets/css/Blog.css'; 

const Blog = ({ limit }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        api.get(`/blogs/${limit}`)
            .then(response => setBlogs(response.data))
            .catch(error => console.error("Error fetching blogs", error));
    }, [limit]);

    return (
        <section className="blog-section">
            <div className="container text-center">
                {/* Blog Section Header */}
                <div className="blog-card">
                    <h2 className="section-title">📖 Latest Blogs</h2>
                    <p className="blog-text">
                        Explore my latest insights, tutorials, and thoughts on web development and programming.
                    </p>
                </div>

                {/* Blog Cards */}
                <div className="row justify-content-center">
                    {blogs.length > 0 ? (
                        blogs.map(blog => (
                            <div key={blog._id} className="col-md-4">
                                <div className="blog-card">
                                    
                                    <h4 className="blog-title">{blog.title}</h4>
                                    <p className="blog-description">{blog.content.slice(0, 120)}...</p>
                                    {/* Use Link to navigate to the full blog detail page */}
                                    <Link to={`/blog/${blog._id}`} className="btn btn-primary">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="loading-text">⏳ Loading blogs...</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Blog;
