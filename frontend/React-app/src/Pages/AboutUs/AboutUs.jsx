import React from 'react';
import Header from '../../Components/Header/Header';
import SideNavigation from '../../Components/SideNavigation/SideNavigation';
import './AboutUs.css';

export default function AboutUs() {
    return (
        <main className="all">
            <Header />
            <div className="contentContainer">
                <SideNavigation />
                <div className="aboutContent">
                    <section className="mission-section">
                        <h1>About ElevatEd</h1>
                        <div className="page-banner">
                            <p className="mission-statement">
                                Empowering learners worldwide through accessible, high-quality tech education
                            </p>
                        </div>

                        <div className="mission-details">
                            <div className="mission-card">
                                <h3>Our Mission</h3>
                                <p>To make technology education accessible, engaging, and effective for everyone, regardless of their background or location. We believe that quality tech education should be available to all who seek it.</p>
                            </div>
                            <div className="mission-card">
                                <h3>Our Vision</h3>
                                <p>Creating a world where quality education knows no boundaries. By 2030, we aim to have empowered 1 million individuals with the skills needed to thrive in the digital economy.</p>
                            </div>
                        </div>
                    </section>

                    <section className="contact-section">
                        <h2>Get In Touch</h2>
                        <div className="contact-container">
                            <div className="contact-info">
                                <div className="contact-method">
                                    <i className="fas fa-envelope"></i>
                                    <div>
                                        <h3>Email Us</h3>
                                        <p>info@elevated-learning.com</p>
                                        <p>support@elevated-learning.com</p>
                                    </div>
                                </div>
                                <div className="contact-method">
                                    <i className="fas fa-phone"></i>
                                    <div>
                                        <h3>Call Us</h3>
                                        <p>+1 (555) 123-4567</p>
                                        <p>Mon-Fri: 9am-5pm EST</p>
                                    </div>
                                </div>
                                <div className="contact-method">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div>
                                        <h3>Visit Us</h3>
                                        <p>123 Tech Campus Drive</p>
                                        <p>Boston, MA 02110</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}