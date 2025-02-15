import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../axios';
import '../assets/css/Blog.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Blog = ({ limit,page }) => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        api.get(`/blogs/${limit}`)
            .then(response => {
                setBlogs(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching blogs", error);
                setLoading(false);
            });
    }, [limit]);

    return (
        <div className="container py-5" id="product-division">
            <h2 className="text-center">Latest Blogs</h2>
            <div className="row">
                {loading ? (
                    Array.from({ length: limit || 6 }).map((_, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card p-3" aria-hidden="true">
                                <div className="card-img-top placeholder" style={{ height: '200px', width: '100%' }}></div>
                                <div className="card-body">
                                    <h5 className="card-title placeholder col-6"></h5>
                                    <p className="card-text placeholder-glow">
                                        <span className="placeholder col-7"></span>
                                        <span className="placeholder col-4"></span>
                                    </p>
                                    <p className="placeholder col-6"></p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : blogs.length > 0 ? (
                    blogs.map(blog => (
                        <div key={blog._id} className="col-md-4 mb-4">
                            <div className="card p-3">
                                <img src={blog.image || "https://www.creativeitinstitute.com/images/course/course_1662795698.jpg"} className="card-img-top" alt={blog.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{blog.title.slice(0, 55)}</h5>
                                    
                                    <p>{blog.content.slice(0, 70)}...</p>
                                    <Link to={`/blog/${blog._id}`} className="btn btn-custom">View Details</Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center">🚫 No products available.</p>
                )}
            </div>
            <div className="text-center mt-3">
                {page=="home"?<Link to="/blog" className="btn btn-custom">See More</Link>:null}
            </div>
        </div>
    );
};

export default Blog;