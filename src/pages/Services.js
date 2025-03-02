import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import Navbar from '../components/Navbar';
import '../styles/Services.css';

const Services = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Format the email body with proper line breaks
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Service: ${formData.service}

Message:
${formData.message}
    `.trim();

    // Create the mailto link with proper encoding
    const mailtoLink = `mailto:shahkhushi2202@gmail.com?subject=${encodeURIComponent('Service Inquiry from ' + formData.name)}&body=${encodeURIComponent(emailBody)}`;

    try {
      // Method 1: Try using window.location.href
      window.location.href = mailtoLink;
      
      // Set a timeout to check if the email client opened
      setTimeout(() => {
        // Method 2: If Method 1 failed, try creating and clicking a link
        const link = document.createElement('a');
        link.href = mailtoLink;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Method 3: If both methods failed, provide a fallback
        setTimeout(() => {
          alert('If your email client did not open, please email us directly at shahkhushi2202@gmail.com');
          // Copy email content to clipboard as a fallback
          navigator.clipboard.writeText(emailBody).then(() => {
            alert('Email content has been copied to your clipboard for convenience.');
          });
        }, 1000);
      }, 1000);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Please email us directly at shahkhushi2202@gmail.com');
    }

    // Reset form and show success message
    setFormData({
      name: '',
      email: '',
      service: '',
      message: ''
    });
    setFormSubmitted(true);
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
            {!formSubmitted ? (
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
                  <option value="SEO Optimization">SEO Optimization</option>
                  <option value="Social Media Marketing">Social Media Marketing</option>
                  <option value="Content Marketing">Content Marketing</option>
                  <option value="PPC Advertising">PPC Advertising</option>
                  <option value="AI-Powered Marketing">AI-Powered Marketing</option>
                  <option value="Influencer & Content Creation">Influencer & Content Creation</option>
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
      </section>
    </div>
  );
};

export default Services; 