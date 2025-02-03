// src/components/DashboardNavbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const DashboardNavbar = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    
    const handleCollapse = () => {
        setIsCollapsed(!isCollapsed);  // Toggle collapse state
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/dashboard">Dashboard</Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#dashboardNavbar" 
                    aria-controls="dashboardNavbar" 
                    aria-expanded={!isCollapsed ? 'true' : 'false'} 
                    aria-label="Toggle navigation"
                    onClick={handleCollapse}  // Toggle on click
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="dashboardNavbar">
                    <ul className="navbar-nav ms-auto">
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard/blog"  onClick={handleCollapse}>Manage Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard/team"  onClick={handleCollapse}>Manage Team</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard/service"  onClick={handleCollapse}>Manage Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard/profile"  onClick={handleCollapse}>Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard/logout"  onClick={handleCollapse}><FontAwesomeIcon icon={faSignOutAlt} /></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default DashboardNavbar;
