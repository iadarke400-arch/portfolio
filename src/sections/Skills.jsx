import React from 'react';
import './Skills.css';

const Skills = () => {
    const skills = [
        { name: 'FIGMA', icon: '/images/figma.png', progress: 40 },
        { name: 'CAP CUT', icon: '/images/capcut.png', progress: 30 },
        { name: 'LIGHTROOM', icon: '/images/lightroom.png', progress: 50 },
        { name: 'CSS', icon: '/images/css.png', progress: 30 },
        { name: 'HTML', icon: '/images/html.png', progress: 60 },
        { name: 'ANDIE', icon: '/images/and.png', progress: 40 } // Duplicated to match 6 items in design, assuming repeated or placeholder
    ];

    return (
        <section id="skills" className="section skills">
            <div className="skills-header-container-top"></div>
            <div className="skills-header-container">
                <div className="bar-side bar-left"></div>
                <div className="skills-title-wrapper">
                    <h2 className="skills-title">MY SKILLS</h2>
                </div>
                <div className="bar-side bar-right">
                    <div className="skills-indicator"></div>
                </div>
            </div>

            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <img src={skill.icon} alt={skill.name} className="skill-icon" />
                        <span className="skill-name">{skill.name}</span>
                        <div className="progress-container">
                            <div className="progress-bar" style={{ width: `${skill.progress}%` }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
