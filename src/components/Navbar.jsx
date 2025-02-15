import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Projects from './Projects';

const Navbar = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const location = useLocation(); // Get the current route

    const handleCollapse = () => {
        setIsCollapsed(true); // Close the navbar after clicking
    };

    const isHomePage = location.pathname === '/'; // Check if you're on the home page

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <RouterLink className="navbar-brand" to="/">Anik C. Deb</RouterLink>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav" 
                    aria-expanded={!isCollapsed ? 'true' : 'false'} 
                    aria-label="Toggle navigation"
                    onClick={() => setIsCollapsed(!isCollapsed)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {isHomePage ? (
                            <>
                                <li className="nav-item">
                                    <ScrollLink className="nav-link" to="home" smooth={true} duration={500} onClick={handleCollapse}  style={{ cursor: "pointer" }}>Home</ScrollLink>
                                </li>
                                <li className="nav-item">
                                    <ScrollLink className="nav-link" to="skills" smooth={true} duration={500} onClick={handleCollapse}  style={{ cursor: "pointer" }}>Skills</ScrollLink>
                                </li>
                                <li className="nav-item">
                                    <ScrollLink className="nav-link" to="cp-experience" smooth={true} duration={500} onClick={handleCollapse}  style={{ cursor: "pointer" }}>CP Experience</ScrollLink>
                                </li>
                                <li className="nav-item">
                                    <ScrollLink className="nav-link" to="problem-solving" smooth={true} duration={500} onClick={handleCollapse}  style={{ cursor: "pointer" }}>Problem Solving</ScrollLink>
                                </li>
                                <li className="nav-item">
                                    <ScrollLink className="nav-link" to="projects" smooth={true} duration={500} onClick={handleCollapse}  style={{ cursor: "pointer" }}>Projects</ScrollLink>
                                </li>
                                <li className="nav-item">
                                    <ScrollLink className="nav-link" to="education" smooth={true} duration={500} onClick={handleCollapse}  style={{ cursor: "pointer" }}>Education</ScrollLink>
                                </li>
                                <li className="nav-item">
                                    <ScrollLink className="nav-link" to="leadership" smooth={true} duration={500} onClick={handleCollapse}  style={{ cursor: "pointer" }}>Leadership</ScrollLink>
                                </li>
                                <li className="nav-item">
                                    <RouterLink className="nav-link" to="/about" onClick={handleCollapse}>Teams</RouterLink>
                                </li>
                                <li className="nav-item">
                                    <RouterLink className="nav-link" to="/blog" onClick={handleCollapse}>Blogs</RouterLink>
                                </li>
                                <li className="nav-item">
                                    <RouterLink className="nav-link" to="/service" onClick={handleCollapse}>Services</RouterLink>
                                </li>
                                <li className="nav-item">
                                    <RouterLink className="nav-link" to="/contact" onClick={handleCollapse}>Contact</RouterLink>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <RouterLink className="nav-link" to="/" onClick={handleCollapse}>Home</RouterLink>
                                </li>
                                <li className="nav-item">
                                    <RouterLink className="nav-link" to="/#skills" onClick={handleCollapse}>Skills</RouterLink>
                                </li>
                                <li className="nav-item">
                                    <RouterLink className="nav-link" to="/#cp-experience" onClick={handleCollapse}>CP Experience</RouterLink>
                                </li>
                                <li className="nav-item">
                                    <RouterLink className="nav-link" to="/#problem-solving" onClick={handleCollapse}>Problem Solving</RouterLink>
                                </li>
                                <li className="nav-item">
                                    <RouterLink className="nav-link" to="/#projects" onClick={handleCollapse}>Projects</RouterLink>
                                </li>
                                <li className="nav-item">
                                    <RouterLink className="nav-link" to="/#education" onClick={handleCollapse}>Education</RouterLink>
                                </li>
                                <li className="nav-item">
                                    <RouterLink className="nav-link" to="/#leadership" onClick={handleCollapse}>Leadership</RouterLink>
                                </li>
                                <li className="nav-item">
                                    <RouterLink className="nav-link" to="/about" onClick={handleCollapse}>Teams</RouterLink>
                                </li>
                                <li className="nav-item">
                                    <RouterLink className="nav-link" to="/blog" onClick={handleCollapse}>Blogs</RouterLink>
                                </li>
                                <li className="nav-item">
                                    <RouterLink className="nav-link" to="/service" onClick={handleCollapse}>Services</RouterLink>
                                </li>
                                <li className="nav-item">
                                    <RouterLink className="nav-link" to="/contact" onClick={handleCollapse}>Contact</RouterLink>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
