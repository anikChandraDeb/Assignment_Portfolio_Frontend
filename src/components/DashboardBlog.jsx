import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../axios.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const DashboardBlog = () => {
    const [blogs, setBlogs] = useState([]);
    const [newBlog, setNewBlog] = useState({ title: '', content: '', image: '' });
    const [editingBlog, setEditingBlog] = useState(null);
    const token = localStorage.getItem("token");

    useEffect(() => {
        api.get('/blogs/0')
            .then(response => setBlogs(response.data))
            .catch(error => console.error('Error fetching blogs:', error));
    }, []);

    // Handle Add Blog
    const handleAddBlog = () => {
        api.post('/blogs', newBlog, { headers: { Authorization: token ? `Bearer ${token}` : "" }, withCredentials: true })
            .then(response => {
                setBlogs([response.data, ...blogs]);
                setNewBlog({ title: '', content: '', image: '' });
            })
            .catch(error => console.error('Error adding blog:', error));
    };

    // Handle Edit Blog
    const handleEditBlog = (blog) => {
        setEditingBlog(blog);
        setNewBlog({ title: blog.title, content: blog.content, image: blog.image });
    };

    const handleUpdateBlog = () => {
        api.put(`/blogs/${editingBlog._id}`, newBlog, { headers: { Authorization: token ? `Bearer ${token}` : "" }, withCredentials: true })
            .then(response => {
                setBlogs(blogs.map(blog => blog._id === editingBlog._id ? response.data : blog));
                setEditingBlog(null);
                setNewBlog({ title: '', content: '', image: '' });
            })
            .catch(error => console.error('Error updating blog:', error));
    };

    // Handle Delete Blog
    const handleDeleteBlog = (id) => {
        api.delete(`/blogs/${id}`, { headers: { Authorization: token ? `Bearer ${token}` : "" }, withCredentials: true })
            .then(() => {
                setBlogs(blogs.filter(blog => blog._id !== id));
            })
            .catch(error => console.error('Error deleting blog:', error));
    };

    return (
        <div className="container">
            <h2>Manage Blogs</h2>

            {/* Add or Edit Blog Form */}
            <div className="mb-4">
                <h4>{editingBlog ? 'Edit Blog' : 'Add New Blog'}</h4>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder='Enter blog title'
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
                        placeholder='Blog Content'
                        rows="4"
                        value={newBlog.content}
                        onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image URL</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder='eg. https://5.imimg.com/data5/SELLER/Default/2024/7/433956451/ZL/BS/GS/15037679/web-designing-course.jpg'
                        id="image"
                        value={newBlog.image}
                        onChange={(e) => setNewBlog({ ...newBlog, image: e.target.value })}
                    />
                </div>

                <button className="btn btn-primary mt-3" onClick={editingBlog ? handleUpdateBlog : handleAddBlog}>
                    {editingBlog ? 'Update Blog' : 'Add Blog'}
                </button>
            </div>

            {/* Blog Table */}
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Sl.</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.length > 0 ? (
                        blogs.map((blog,index) => (
                            <tr key={blog._id}>
                                <td>{index+1}</td>
                                <td>{blog.title}</td>
                                <td>{blog.content.slice(0, 120)}...</td>
                                <td>
                                    {blog.image ? (
                                        <img src={blog.image} alt="Blog" className="img-thumbnail" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                                    ) : (
                                        'No Image'
                                    )}
                                </td>
                                <td>
                                    <button className="btn btn-warning me-2" onClick={() => handleEditBlog(blog)}>
                                        <FontAwesomeIcon icon={faEdit} />
                                    </button>
                                    <button className="btn btn-danger" onClick={() => handleDeleteBlog(blog._id)}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center">No blogs available.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default DashboardBlog;
