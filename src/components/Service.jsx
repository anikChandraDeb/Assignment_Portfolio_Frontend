import React, { useState, useEffect } from 'react';
import api from '../axios';
import '../assets/css/Service.css'; 

const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        api.get('/services')
            .then(response => setServices(response.data))
            .catch(error => console.error("Error fetching services", error));
    }, []);

    return (
        <section id="service" className="service-section">
            <div className="container text-center">
                <h2 className="section-title"> My Services</h2>
                <p className="section-subtitle">What I can offer to help you grow.</p>

                <div className="row justify-content-center">
                    {services.length > 0 ? (
                        services.map(service => (
                            <div key={service._id} className="col-md-4">
                                <div className="service-card">
                                    <h5 className="service-title">{service.title}</h5>
                                    <p className="service-description">{service.description}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="loading-text">⏳ Loading services...</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Service;
