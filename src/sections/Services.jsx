import React from 'react';
import './Services.css';

const Services = () => {
    const servicesData = [
        { title: 'FRONTEND', subtitle: 'DEVELOPMENT' },
        { title: 'VIDEO', subtitle: 'EDITING' },
        { title: 'UX/UI', subtitle: 'DESIGN' },
        { title: 'PRODUCT', subtitle: 'DESIGN' }
    ];

    return (
        <section id="services" className="section services">
            <div className="services-header-container-top"></div>
            <div className="services-header-container">
                <div className="bar-side bar-left"></div>
                <div className="services-title-wrapper">
                    <h2 className="services-title">SERVICES</h2>
                </div>
                <div className="bar-side bar-right">
                    <div className="service-indicator"></div>
                </div>
            </div>
            <div className="services-grid">
                {servicesData.map((service, index) => (
                    <div key={index} className="service-card">
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-subtitle">{service.subtitle}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
