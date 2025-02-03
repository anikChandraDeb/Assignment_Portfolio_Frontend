import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../assets/css/Navbar.css';
const Navbar = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleCollapse = () => {
        setIsCollapsed(!isCollapsed);  // Toggle collapse state
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">ANIK'S Sol<sup>n</sup></Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded={!isCollapsed ? 'true' : 'false'} 
                    aria-label="Toggle navigation"
                    onClick={handleCollapse}  // Toggle on click
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={handleCollapse}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" onClick={handleCollapse}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog" onClick={handleCollapse}>Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/service" onClick={handleCollapse}>Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact" onClick={handleCollapse}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;