import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/images/ADS_transparent.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToServices = () => {
    if (location.pathname !== '/') {
      window.location.href = '/#services';
    } else {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    if (location.pathname !== '/') {
      window.location.href = '/#contact';
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="" className="navbar-logo">
          <img 
            src={logo}
            alt="Adspired - Marketing That Matters" 
            className="nav-logo"
          />
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <button onClick={scrollToServices} className="nav-link">Services</button>
          <Link to="/about" className="nav-link">About</Link>
          <button onClick={scrollToContact} className="nav-link primary-btn">Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 