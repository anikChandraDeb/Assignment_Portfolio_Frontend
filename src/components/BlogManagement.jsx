import React, { useEffect, useState } from "react";
import api from "../../axios";

const BlogManagement = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        api.get("/blogs")
            .then(res => setBlogs(res.data))
            .catch(error => console.error("Error fetching blogs", error));
    }, []);

    const handleDelete = (id) => {
        api.delete(`/blogs/${id}`).then(() => {
            setBlogs(blogs.filter(blog => blog._id !== id));
        });
    };

    return (
        <div>
            <h2>Manage Blogs</h2>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map(blog => (
                        <tr key={blog._id}>
                            <td>{blog.title}</td>
                            <td>
                                <button>Edit</button>
                                <button onClick={() => handleDelete(blog._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BlogManagement;
