import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/images/ADS_transparent.png';
import '../styles/Footer.css';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    // Check if we're on the home page
    if (window.location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not on home page, navigate to home and then scroll
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src={logo} alt="Adspired Logo" className="footer-logo" />
          <p>
            Transform your digital presence with our innovative marketing solutions.
            Let's grow your business together.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/" onClick={() => window.location.reload()}>Home</a></li>
            <li><a href="/#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
            <li><a href="/#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Our Services</h3>
          <ul>
            <li><a href="/#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Paid Advertisement</a></li>
            <li><a href="/#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Social Media Marketing</a></li>
            <li><a href="/#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Branding</a></li>
            <li><a href="/#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>E-Invite Design</a></li>
            <li><a href="/#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Performance Marketing</a></li>
            <li><a href="/#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Graphic Design</a></li>
            <li><a href="/#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>AI Marketing</a></li>
            <li><a href="/#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Content Creation</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul>
            <li>Email: shahkhushi2202@gmail.com</li>
          </ul>
          <ul>
            <li>Phone: +1 (408) 718-5122</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Adspired. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 