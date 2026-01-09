import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="about-container">
                <div className="about-image">
                    {/* Placeholder for Profile Image - User should replace the URL in CSS or put an img here */}
                    <div className="profile-circle"></div>
                </div>
                <div className="about-content">
                    <div className="about-header">
                        <h2 className="about-title">ABOUT</h2>
                        <div className="arrow-icon">
                            <span>&rarr;</span> {/* Simple arrow, rotated in CSS */}
                        </div>
                    </div>
                    <p className="about-text">
                        <span className="highlight-name">I'm Mohammed Salim</span>, a passionate UI/UX Designer with a strong interest in building user-centered digital products. I specialize in creating seamless interfaces, clear user flows, and visually appealing designs that balance functionality and aesthetics.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
