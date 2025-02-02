import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../axios.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const DashboardBlog = () => {
    const [blogs, setBlogs] = useState([]);
    const [newBlog, setNewBlog] = useState({ title: '', content: '' });
    const [editingBlog, setEditingBlog] = useState(null);
    const token = localStorage.getItem("token");
    useEffect(() => {
        // Fetch all blogs when the component mounts
        api.get('/blogs/0')
            .then(response => {
                setBlogs(response.data);
                console.log(response)
            })
            .catch(error => {
                console.error('Error fetching blogs:', error);
            });
    }, []);

    // Handle Add Blog
    const handleAddBlog = () => {
        // console.log(token)
        api.post('/blogs', newBlog,{headers: { 
            Authorization: token ? `Bearer ${token}` : "", 
              },withCredentials: true})
            .then(response => {
                // console.log('hhhh')
                setBlogs([response.data,...blogs ]);
                setNewBlog({ title: '', content: '' }); 
            })
            .catch(error => {
                console.error('Error adding blog:', error);
            });
    };

    // Handle Edit Blog (update)
    const handleEditBlog = (blog) => {
        setEditingBlog(blog);
        setNewBlog({ title: blog.title, content: blog.content });
    };

    const handleUpdateBlog = () => {
        api.put(`/blogs/${editingBlog._id}`, newBlog,{headers: { 
            Authorization: token ? `Bearer ${token}` : "", 
              },withCredentials: true})
            .then(response => {
                setBlogs(blogs.map(blog => blog._id === editingBlog._id ? response.data : blog));
                setEditingBlog(null); 
                setNewBlog({ title: '', content: '' });
            })
            .catch(error => {
                console.error('Error updating blog:', error);
            });
    };

    // Handle Delete Blog
    const handleDeleteBlog = (id) => {
        api.delete(`/blogs/${id}`,{headers: { 
            Authorization: token ? `Bearer ${token}` : "", 
              },withCredentials: true})
            .then(() => {
                setBlogs(blogs.filter(blog => blog._id !== id));
            })
            .catch(error => {
                console.error('Error deleting blog:', error);
            });
    };

    return (
        <div>

            {/* Add or Edit Blog Form */}
            <div className="container">
            <h2>Manage Blogs</h2>
            <div className="mb-4">
                <h4>{editingBlog ? 'Edit Blog' : 'Add New Blog'}</h4>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={newBlog.title}
                        onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <textarea
                        className="form-control"
                        id="content"
                        rows="4"
                        value={newBlog.content}
                        onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
                    />
                </div>

                <button
                    className="btn btn-primary mt-3"
                    onClick={editingBlog ? handleUpdateBlog : handleAddBlog}
                >
                    {editingBlog ? 'Update Blog' : 'Add Blog'}
                </button>
            </div>

            

            {/* Blog Table */}
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.length > 0 ? (
                        blogs.map((blog) => (
                            <tr key={blog._id}>
                                <td>{blog.title}</td>
                                <td>{blog.content.slice(0, 120)}...</td>
                                <td>
                                    <button
                                        className="btn btn-warning me-2"
                                        onClick={() => handleEditBlog(blog)}
                                    >
                                        <FontAwesomeIcon icon={faEdit} /> 
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleDeleteBlog(blog._id)}
                                    >
                                       <FontAwesomeIcon icon={faTrash} /> 
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" className="text-center">
                                No blogs available.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default DashboardBlog;
