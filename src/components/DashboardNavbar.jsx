// src/components/DashboardNavbar.jsx
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const DashboardNavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/dashboard">Dashboard</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#dashboardNavbar" aria-controls="dashboardNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="dashboardNavbar">
                    <ul className="navbar-nav ms-auto">
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard/blog">Manage Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard/team">Manage Team</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard/service">Manage Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard/profile">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard/logout"><FontAwesomeIcon icon={faSignOutAlt} /></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default DashboardNavbar;
