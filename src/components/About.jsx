import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/css/About.css'; // Import the CSS file
import api from '../axios.js'

const About = () => {
    const [team, setTeam] = useState([]);

    useEffect(() => {
        api.get('/team')
            .then(response => setTeam(response.data))
            .catch(error => console.error('Error fetching team data:', error));
    }, []);

    return (
        <section className="about-section">
            <div className="container text-center">
                {/* About Me Section */}
                <div className="about-card">
                    <h2 className="section-title">👨‍💻 About Me</h2>
                    <p className="about-text">
                        I am a passionate **MERN stack developer** who enjoys building **scalable** and **user-friendly** applications.  
                        I love solving complex problems and creating impactful solutions through code. I am also a competitive programming participant in ICPC and have participated in many IUPC competitions.
                    </p>

                    {/* Skills Section */}
                    <h3 className="sub-title">💡 My Skills</h3>
                    <div className="skills-list">
                        <span>JavaScript (ES6+)</span>
                        <span>React.js</span>
                        <span>Node.js</span>
                        <span>Express.js</span>
                        <span>MongoDB</span>
                        <span>SQL</span>
                        <span>GIT & GitHub</span>
                        <span>DSA</span>
                    </div>
                </div>

                {/* Team Section */}
                <h3 className="team-title">🌟 Meet Our Team</h3>
                <div className="row justify-content-center">
                    {team.length > 0 ? (
                        team.map(member => (
                            <div key={member._id} className="col-md-4">
                                <div className="team-card">
                                    <h4 className="team-name">{member.name}</h4>
                                    <p className="team-description">{member.description}</p>
                                    <small className="team-creator">Added by: {member.createdBy}</small>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="loading-text">⏳ Loading team members...</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default About;
