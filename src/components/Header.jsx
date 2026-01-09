import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for header

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          {/* Placeholder for the logo from image */}
          <img src="/images/bluebee_icon.png" alt="Bluebee Logo" className="logo-img" />
        </div>
      </div>
      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className={isMenuOpen ? "bar open" : "bar"}></span>
        <span className={isMenuOpen ? "bar open" : "bar"}></span>
        <span className={isMenuOpen ? "bar open" : "bar"}></span>
      </div>
      <div className={`header-right ${isMenuOpen ? 'open' : ''}`}>
        <nav>
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            {['home', 'services', 'skills', 'projects', 'about'].map((item) => (
              <li
                key={item}
                className={activeSection === item ? 'active' : ''}
                onClick={() => {
                  scrollToSection(item);
                  setIsMenuOpen(false);
                }}
              >
                {item.toUpperCase()}
              </li>
            ))}
          </ul>
        </nav>
        <button className="contact-btn" onClick={() => {
          scrollToSection('contact');
          setIsMenuOpen(false);
        }}>CONTACT</button>
      </div>
    </header>
  );
};

export default Header;
