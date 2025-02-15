import React, { useEffect, useState } from 'react';
import api from '../axios.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
    const [team, setTeam] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get('/team')
            .then(response => {
                setTeam(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching team data:', error);
                setLoading(false);
            });
    }, []);

    return (
        
        <section className="about-section">
            <br />
            <div className="container text-center">
                

                
                <br />
                {/* Team Section */}
                <h3 className="team-title">🌟 Meet Our Team</h3>
                <div className="row">
                    {loading ? (
                        // Loading placeholders
                        Array.from({ length: 3 }).map((_, index) => (
                            <div key={index} className="col-md-4 mb-4">
                                <div className="card placeholder-glow" aria-hidden="true">
                                    <div className="card-body">
                                        <h5 className="card-title placeholder col-6"></h5>
                                        <p className="card-text placeholder col-8"></p>
                                        <small className="placeholder col-4"></small>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : team.length > 0 ? (
                        team.map(member => (
                            <div key={member._id} className="col-md-4 mb-4">
                                <div className="card p-3">
                                <img src={member.image || "https://www.creativeitinstitute.com/images/course/course_1662795698.jpg"} className="card-img-top" alt={member.name} />

                                    <div className="card-body">
                                        <h4 className="card-title">{member.name}</h4>
                                        <p className="card-text">{member.description}</p>
                                        <small className="text-muted">Added by: {member.createdBy}</small>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="loading-text">🚫 No team members available.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default About;