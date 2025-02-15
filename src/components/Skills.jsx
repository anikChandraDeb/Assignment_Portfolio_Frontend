import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Animation.css'

const Skills = () => {
  const skillsData = [
    {
      category: 'Programming Languages',
      skills: ['C', 'C++', 'Python', 'PHP', 'JavaScript'],
      color: 'primary', // Blue
    },
    {
      category: 'Frontend',
      skills: ['HTML', 'CSS', 'React', 'Bootstrap'],
      color: 'success', // Green
    },
    {
      category: 'Backend',
      skills: ['Express.js', 'Node.js'],
      color: 'info', // Cyan
    },
    {
      category: 'Database',
      skills: ['SQL', 'MongoDB'],
      color: 'warning', // Yellow
    },
    {
      category: 'Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman','MS Office', 'Dev Tools'],
      color: 'danger', // Red
    },
    {
      category: 'Miscellaneous',
      skills: ['Problem Solving', 'Data Structure', 'Algorithm', 'OOP', 'Ubuntu','Netlify','Vercel','Self-Motivated'],
      color: 'secondary', // Gray
    }
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Skills</h2>
      <div className="row">
        {skillsData.map((section, idx) => (
          <div key={idx} className="col-md-6 mb-4">
            <div className="card shadow-sm border-light animation-card">
              <div className="card-body">
                <h5 className="card-title">{section.category}</h5>
                <div className="d-flex flex-wrap gap-2">
                  {section.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className={`badge bg-${section.color} fs-6 px-3 py-2 text-white rounded-pill`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
