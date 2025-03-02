import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import Navbar from '../components/Navbar';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';
import heroImage from '../assets/images/adspired_home_page.svg';
import contactBg from '../assets/images/contact us.jpg';
import '../styles/Home.css';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const servicesTitles = services.map(service => service.title);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorPosition, setCursorPosition] = useState(0);
  const [emailSent, setEmailSent] = useState(false);
  const [contactFormSent, setContactFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const typeText = async () => {
      const currentService = servicesTitles[currentIndex];
      
      if (!isDeleting) {
        if (displayText.length < currentService.length) {
          const nextChunk = currentService.slice(0, displayText.length + 3);
          setDisplayText(nextChunk);
          setCursorPosition(nextChunk.length);
        } else {
          await new Promise(resolve => setTimeout(resolve, 800));
          setIsDeleting(true);
        }
      } else {
        if (displayText.length > 0) {
          const nextText = displayText.slice(0, Math.max(0, displayText.length - 3));
          setDisplayText(nextText);
          setCursorPosition(nextText.length);
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % servicesTitles.length);
          await new Promise(resolve => setTimeout(resolve, 300));
        }
      }
    };

    const timer = setTimeout(typeText, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [currentIndex, displayText, isDeleting, servicesTitles]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:shahkhushi2202@gmail.com?subject=New Project Inquiry&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AService: ${formData.service}%0D%0AMessage: ${formData.message}`;
    window.open(mailtoLink);
    setFormData({
      name: '',
      email: '',
      service: '',
      message: ''
    });
    setContactFormSent(true);
  };

  return (
    <div className="home">
      <Navbar />
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content" data-aos="fade-right">
            <h1 className="hero-title">We Provide, </h1>
            <div className="typing-text" style={{ '--cursor-position': `${cursorPosition}ch` }}>
              {displayText}
            </div>
            <p>
              At Adspired, we leverage advanced AI and data-driven marketing to create impactful content, engaging campaigns, and a stronger online presence for your brand.
            </p>
            <div className="hero-buttons">
              <button onClick={() => scrollToSection('services')} className="primary-btn">
                Our Services
              </button>
              <button onClick={() => scrollToSection('contact')} className="secondary-btn">
                <span>Get Started</span>
              </button>
            </div>
          </div>
          <div className="hero-image" data-aos="fade-left">
            <img src={heroImage} alt="Digital Marketing Solutions" />
          </div>
        </div>
      </section>

      <section className="why-digital-marketing">
        <div className="container">
          <h2 data-aos="fade-up">Why Digital Marketing?</h2>
          <div className="why-digital-content">
            <div className="card-grid">
              <div className="stat-card highlight-card" data-aos="fade-up" data-aos-delay="100">
                <h3>90%</h3>
                <p>Marketers say digital channels are more effective than traditional marketing</p>
              </div>
              
              <div className="benefit-card" data-aos="fade-up" data-aos-delay="200">
                <img 
                  src="https://img.icons8.com/fluency/96/money-bag.png"
                  alt="Cost Effective"
                  className="benefit-icon"
                />
                <div className="benefit-content">
                  <h3>Cost Effective</h3>
                  <p>Achieve impactful results with a lower budget compared to traditional marketing.</p>
                </div>
              </div>

              <div className="stat-card" data-aos="fade-up" data-aos-delay="300">
                <h3>5x</h3>
                <p>Higher conversion rate compared to traditional marketing methods</p>
              </div>

              <div className="benefit-card highlight-card" data-aos="fade-up" data-aos-delay="400">
                <img 
                  src="https://img.icons8.com/fluency/96/analytics.png"
                  alt="Measurable Results"
                  className="benefit-icon"
                />
                <div className="benefit-content">
                  <h3>Measurable Results</h3>
                  <p>Track and optimize your campaigns in real-time with detailed analytics and metrics.</p>
                </div>
              </div>

              <div className="stat-card" data-aos="fade-up" data-aos-delay="500">
                <h3>95%</h3>
                <p>Businesses report higher ROI with digital marketing strategies</p>
              </div>

              <div className="benefit-card" data-aos="fade-up" data-aos-delay="600">
                <img 
                  src="https://img.icons8.com/fluency/96/worldwide-location.png"
                  alt="Global Reach"
                  className="benefit-icon"
                />
                <div className="benefit-content">
                  <h3>Global Reach</h3>
                  <p>Expand your business beyond geographical boundaries and reach customers worldwide.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="what-makes-us-different">
        <div className="container">
          <div className="section-header">
            <h2 data-aos="fade-up">What Makes Us Different</h2>
            <p className="section-subtext" data-aos="fade-up" data-aos-delay="200">
              Meeting with your marketing team shouldn't be stressful — it should be exciting, full of new ideas and ways to help you stand out from the competition.
            </p>
          </div>
          <div className="differences-grid">
            <div className="difference-card" data-aos="fade-up" data-aos-delay="100">
              <img 
                src="https://img.icons8.com/fluency/96/report-card.png"
                alt="Free Social Media Audit"
                className="benefit-icon"
              />
              <h3>Free Social Media Audit</h3>
              <p>We will analyze your existing page and go over any issues we find during our first meeting.</p>
            </div>
            <div className="difference-card" data-aos="fade-up" data-aos-delay="200">
              <img 
                src="https://img.icons8.com/fluency/96/combo-chart.png"
                alt="Monthly Reports"
                className="benefit-icon"
              />
              <h3>Monthly Reports</h3>
              <p>All clients get monthly reports that detail what work was done and how their company is doing online..</p>
            </div>
            <div className="difference-card" data-aos="fade-up" data-aos-delay="300">
              <img 
                src="https://img.icons8.com/fluency/96/badge.png"
                alt="Custom Branding & Design"
                className="benefit-icon"
              />
              <h3>Custom Branding & Design</h3>
              <p>Eye-catching graphic design that define your brand and rapig development to make your brand stand out.</p>
            </div>
            <div className="difference-card" data-aos="fade-up" data-aos-delay="400">
              <img 
                src="https://img.icons8.com/fluency/96/share-2.png"
                alt="Social Media Trends"
                className="benefit-icon"
              />
              <h3>Social Media Trends</h3>
              <p>We keep your brand ahead by leveraging the latest social media trends..</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="our-services">
        <div className="container">
          <h2 data-aos="fade-up">Our Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                variant="flip"
                animationDelay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-cta">
        <div className="container">
          <div className="pricing-grid">
            <div className="pricing-content" data-aos="fade-right">
              <h2>Free Social Media Audit?</h2>
            </div>
            <div className="email-form" data-aos="fade-left">
              <div className="email-box">
                {!emailSent ? (
                  <>
                    <input 
                      type="email" 
                      placeholder="Enter your email for the free audit"
                      className="email-input"
                      onChange={(e) => {
                        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value);
                        e.target.classList.toggle('valid', isValid);
                        const button = e.target.nextElementSibling;
                        button.disabled = !isValid;
                        if (isValid) {
                          button.setAttribute('data-email', e.target.value);
                        }
                      }}
                    />
                    <button 
                      className="primary-btn" 
                      disabled
                      onClick={(e) => {
                        const userEmail = e.target.getAttribute('data-email');
                        const mailtoLink = `mailto:shahkhushi2202@gmail.com?subject=Request for Free Social Media Audit&body=Hi, I would like to request a free social media audit for my business.%0D%0A%0D%0AMy email address is: ${userEmail}`;
                        window.open(mailtoLink);
                        setEmailSent(true);
                      }}
                    >
                      Get Free Audit
                    </button>
                  </>
                ) : (
                  <div className="success-message">
                    <p>Thank you! We'll send your audit details shortly.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="cta-section">
        <div className="contact-container">
          <div className="contact-image">
            <img src={contactBg} alt="Contact Us" />
          </div>
          <div className="contact-form-container">
            <div className="cta-content" data-aos="fade-up">
              <h2>Ready to Grow Your Business?</h2>
              <p>Let's create a digital marketing strategy that works for you.</p>
              {!contactFormSent ? (
                <form className="contact-form" onSubmit={handleFormSubmit}>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your Name" 
                    required 
                    value={formData.name}
                    onChange={handleFormChange}
                  />
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Your Email" 
                    required 
                    value={formData.email}
                    onChange={handleFormChange}
                  />
                  <select 
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleFormChange}
                  >
                    <option value="">Select a Service</option>
                    {services.map(service => (
                      <option key={service.id} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                  <textarea 
                    name="message"
                    placeholder="Tell us about your project" 
                    required
                    value={formData.message}
                    onChange={handleFormChange}
                  ></textarea>
                  <button type="submit" className="primary-btn">
                    Get Started Today
                  </button>
                </form>
              ) : (
                <div className="success-message">
                  <p>Thank you! We'll get back to you shortly about your project.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 