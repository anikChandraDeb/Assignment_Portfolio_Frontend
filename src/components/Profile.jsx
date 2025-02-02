import React, { useState, useEffect } from 'react';
import api from '../axios'; // Assuming you have axios configured for API requests

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");
  
  useEffect(() => {
    // Fetch logged-in user's data from the backend
    api.get('/profile',{headers: { 
        Authorization: token ? `Bearer ${token}` : "", 
          },withCredentials: true}) 
      .then(response => {
        setUser(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Error fetching user data');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading user profile...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container user-profile">
      <h2>User Profile</h2>
      {user && (
        <table className="table border table-striped">
          <thead>
            <tr>
              <th>Field</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{user.name}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{user.email}</td>
            </tr>

          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserProfile;
