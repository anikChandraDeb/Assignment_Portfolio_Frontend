import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import portfolio from '../assets/images/portfolio.png';
import backend from '../assets/images/backend.jpeg';

const projects = [
  {
    name: "Storage Management System",
    image: backend,
    description: "A backend system for managing storage using Node.js, Express.js, and MongoDB.",
    teck: ['Node.js', 'Express.js', 'MongoDB'],
    github: "https://github.com/anikChandraDeb/Storage_Management_System",
    live: "#",
  },
  {
    name: "Shopeage",
    image: backend,
    description: "An e-commerce web application with dynamic product management.",
    teck: ['Node.js', 'Express.js', 'MongoDB'],
    github: "https://github.com/anikChandraDeb/ShopEase_Backend",
    live: "#",
  },
  {
    name: "Portfolio",
    image: portfolio,
    description: "A personal portfolio website showcasing my projects and skills.",
    teck: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    github: "https://github.com/anikChandraDeb/Portfolio",
    live: "https://portfolio-aniks.netlify.app/",
  },
];

const Projects = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">My Projects</h2>
      <div className="row g-4">
        {projects.map((project, index) => (
          <div className="col-md-4" key={index}>
            <div className="card shadow-sm">
              <img src={project.image} className="card-img-top" alt={project.name} style={{ height: '200px', width: 'auto' }} />
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.description}</p>
                <div className="mb-3">
                  <strong>Tech Stack:</strong>
                  <div className="d-flex flex-wrap mt-2 gap-2">
                    {project.teck.map((tech, i) => (
                      <span key={i} className="btn btn-sm btn-outline-primary">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    GitHub
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary">
                    Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
