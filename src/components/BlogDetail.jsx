// src/components/BlogDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../axios'; 

const BlogDetail = () => {
  const { blogId } = useParams(); 
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the blog detail when the component mounts or blogId changes
  useEffect(() => {
    api.get(`/blogsByID/${blogId}`)
      .then(response => {
        setBlog(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Error fetching blog details');
        setLoading(false);
      });
  }, [blogId]); 

  if (loading) {
    return <div>Loading blog details...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div Style="padding: 50px;
            background: azure;
            color: black;
            min-height: 100vh;
            @media (max-width: 768px) {
                padding: 10px;
                h2{font-size:20px;}
                p{font-size:15px;}
            }
  ">
      <h2>{blog.title}</h2>
      <div>
        <p>{blog.content}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
