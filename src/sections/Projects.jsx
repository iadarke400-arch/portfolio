import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        { id: 1, name: 'E-Commerce App', price: '$2000' },
        { id: 2, name: 'Portfolio Site', price: '$800' },
        { id: 3, name: 'Social Media App', price: '$3500' },
        { id: 4, name: 'Dashboard UI', price: '$1200' },
        { id: 5, name: 'Landing Page', price: '$500' }
    ];

    const [activeIndex, setActiveIndex] = useState(1); // Start with second item active

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % projects.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    // content logic to show loop of 3 items centered around activeIndex
    const getVisibleProjects = () => {
        const prevIndex = (activeIndex - 1 + projects.length) % projects.length;
        const nextIndex = (activeIndex + 1) % projects.length;
        return [
            { ...projects[prevIndex], type: 'prev' },
            { ...projects[activeIndex], type: 'active' },
            { ...projects[nextIndex], type: 'next' }
        ];
    };

    const visibleProjects = getVisibleProjects();

    return (
        <section id="projects" className="section projects">
            <div className="projects-header-container-top"></div>
            <div className="projects-header-container">
                <div className="bar-side bar-left"></div>
                <div className="projects-title-wrapper">
                    <h2 className="projects-title">PROJECTS</h2>
                </div>
                <div className="bar-side bar-right">
                    <div className="projects-indicator"></div>
                </div>
            </div>

            <h3 className="pricing-title">PRICING</h3>

            <div className="carousel-container">
                <button className="nav-btn prev" onClick={handlePrev}>&larr;</button>

                {visibleProjects.map((project, index) => (
                    <div key={`${project.id}-${index}`} className={`carousel-card ${project.type}`}>
                        {/* Placeholder Content */}
                        <div className="project-info">
                            <div className="project-name">{project.name}</div>
                            <div className="project-price">{project.price}</div>
                        </div>
                    </div>
                ))}

                <button className="nav-btn next" onClick={handleNext}>&rarr;</button>
            </div>

            <button className="view-project-btn">VIEW PROJECT</button>
        </section>
    );
};

export default Projects;
