// src/components/DashboardNavbar.jsx
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import api from '../axios'; 

const DashboardNavbar = () => {
  const [teamCount, setTeamCount] = useState(0);
  const [serviceCount, setServiceCount] = useState(0);
  const [blogCount, setBlogCount] = useState(0);

  // Fetch the counts when the component mounts
  useEffect(() => {
    // Fetch total number of teams
    api.get('/team/count')
      .then(response => setTeamCount(response.data.count))
      .catch(error => console.error('Error fetching team count:', error));

    // Fetch total number of services
    api.get('/services/count')
      .then(response => setServiceCount(response.data.count))
      .catch(error => console.error('Error fetching service count:', error));

    // Fetch total number of blogs
    api.get('/blogscount')
      .then(response => setBlogCount(response.data.count))
      .catch(error => console.error('Error fetching blog count:', error));
  }, []);

  return (
    <div className="d-flex" id="dashboard-layout">


      {/* Main Content Area */}
      <div id="main-content" className="flex-grow-1 p-4">
        <div className="dashboard-overview">
          <h4>Portfolio Overview</h4>
          <div className="row">
          <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Total Blogs</h5>
                  <p className="card-text">{blogCount}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Total Teams</h5>
                  <p className="card-text">{teamCount}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Total Services</h5>
                  <p className="card-text">{serviceCount}</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* Render the selected route */}
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardNavbar;
