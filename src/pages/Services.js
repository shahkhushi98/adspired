import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import Navbar from '../components/Navbar';
import '../styles/Services.css';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="services-page">
      <Navbar />
      <section className="services-hero">
        <div className="services-hero-content">
          <h1 data-aos="fade-up">Our Services</h1>
          <p data-aos="fade-up" data-aos-delay="200">
            Comprehensive digital marketing solutions tailored to your business needs
          </p>
        </div>
      </section>

      <section className="services-main">
        <div className="container">
          <div className="services-grid">
            <div id="seo" className="service-item" data-aos="fade-up">
              <div className="service-icon">🔍</div>
              <h3>SEO Optimization</h3>
              <p>Boost your search rankings and drive organic traffic with our expert SEO services.</p>
              <ul>
                <li>Keyword Research & Strategy</li>
                <li>On-Page SEO Optimization</li>
                <li>Technical SEO Audit</li>
                <li>Link Building & Authority</li>
              </ul>
            </div>

            <div id="social" className="service-item" data-aos="fade-up" data-aos-delay="100">
              <div className="service-icon">📱</div>
              <h3>Social Media Marketing</h3>
              <p>Build a strong social presence and engage with your target audience effectively.</p>
              <ul>
                <li>Content Strategy & Planning</li>
                <li>Social Media Management</li>
                <li>Community Engagement</li>
                <li>Performance Analytics</li>
              </ul>
            </div>

            <div id="content" className="service-item" data-aos="fade-up" data-aos-delay="200">
              <div className="service-icon">✍️</div>
              <h3>Content Marketing</h3>
              <p>Create compelling content that resonates with your audience and drives results.</p>
              <ul>
                <li>Content Strategy</li>
                <li>Blog Writing & Management</li>
                <li>Email Marketing</li>
                <li>Content Distribution</li>
              </ul>
            </div>

            <div id="ppc" className="service-item" data-aos="fade-up" data-aos-delay="300">
              <div className="service-icon">📊</div>
              <h3>PPC Advertising</h3>
              <p>Drive immediate results with targeted paid advertising campaigns.</p>
              <ul>
                <li>Campaign Strategy</li>
                <li>Ad Creation & Optimization</li>
                <li>Budget Management</li>
                <li>Performance Tracking</li>
              </ul>
            </div>
            <div id="ai" className="service-item" data-aos="fade-up" data-aos-delay="300">
              <img 
                src="https://img.icons8.com/fluency/96/design.png"
                alt="AI-Powered Marketing"
                className="benefit-icon"
              />
              <h3>AI-Powered Marketing</h3>
            </div>
            <div id="cc" className="service-item" data-aos="fade-up" data-aos-delay="300">
              <img 
                src="https://img.icons8.com/fluency/96/design.png"
                alt="Influencer & Content Creation"
                className="benefit-icon"
              />
              <h3>Influencer & Content Creation</h3>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="cta-section">
        <div className="container">
          <div className="cta-content" data-aos="fade-up">
            <h2>Ready to Transform Your Digital Presence?</h2>
            <p>Let's create a customized digital marketing strategy for your business.</p>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <select required>
                <option value="">Select a Service</option>
                <option value="seo">SEO Optimization</option>
                <option value="social">Social Media Marketing</option>
                <option value="content">Content Marketing</option>
                <option value="ppc">PPC Advertising</option>
              </select>
              <textarea placeholder="Tell us about your project" required></textarea>
              <button type="submit" className="primary-btn">
                Get Started Today
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services; 