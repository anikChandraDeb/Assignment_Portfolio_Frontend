import React, { useState, useEffect } from 'react';
import api from '../axios';
// import '../assets/css/Service.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const Service = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        api.get('/services')
            .then(response => {
                setServices(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching services", error);
                setLoading(false);
            });
    }, []);

    return (
        <section id="service" className="service-section">
            <div className="container text-center">
                <h2 className="section-title"> My Services</h2>

                <div className="row">
                    {loading ? (
                        // Loading placeholders
                        Array.from({ length: 3 }).map((_, index) => (
                            <div key={index} className="col-md-4 mb-4">
                            <div className="card p-3" aria-hidden="true">
                                <div className="card-img-top placeholder" style={{ height: '200px', width: '100%' }}></div>
                                <div className="card-body">
                                    <h5 className="card-title placeholder col-6"></h5>
                                    <p className="card-text placeholder-glow">
                                        <span className="placeholder col-7"></span>
                                        <span className="placeholder col-4"></span>
                                    </p>
                                    <p className="placeholder col-6"></p>
                                </div>
                            </div>
                        </div>
                        ))
                    ) : services.length > 0 ? (
                        // Render services after loading
                        services.map(service => (
                            <div key={service._id} className="col-md-4 mb-4">
                                <div className="card service-card p-3">
                                <img src={service.image || "https://www.creativeitinstitute.com/images/course/course_1662795698.jpg"} className="card-img-top" alt={service.title} />

                                    <div className="card-body">
                                        <h5 className="service-title">{service.title}</h5>
                                        <p className="service-description">{service.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="loading-text">🚫 No services available.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Service;
