import React from 'react';
import '../assets/css/Contact.css'; 

const Contact = () => {
    return (
        <section className="contact-section">
            <div className="container text-center">
                {/* Contact Section Header */}
                <div className="contact-card">
                    <h2 className="section-title">📬 Get in Touch</h2>
                    <p className="contact-text">
                        Feel free to reach out! Whether you have a question, a project idea, or just want to say hi, I'm always open to conversations.
                    </p>
                </div>

                {/* Contact Form */}
                <div className="contact-form-container">
                    <form className="contact-form">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Your Name</label>
                            <input type="text" className="form-control" id="name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input type="email" className="form-control" id="email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Your Message</label>
                            <textarea className="form-control" id="message" rows="4" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
