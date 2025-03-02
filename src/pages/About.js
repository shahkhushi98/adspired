import React from 'react';
import Navbar from '../components/Navbar';
import aboutImage from '../assets/images/about us.png';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      <Navbar />
      
      <div className="hero-image">
        <img src={aboutImage} alt="Adspired Team" />
      </div>

      <section className="who-we-are">
        <div className="container">
          <h2>Who We Are</h2>
          <div className="content-text">
            <p className="lead">
              At Adspired, we're more than just a digital marketing agency – we're your partners in digital transformation and growth.
            </p>
            <p>
              We leverage advanced AI and data-driven strategies to create impactful content, engaging campaigns, and a stronger online presence for your brand. Our approach combines innovative technology with creative expertise to deliver measurable results.
            </p>
            <p>
              What sets us apart is our commitment to providing comprehensive digital solutions that are both strategic and results-driven. From free social media audits to custom branding and design, we ensure every aspect of your digital presence is optimized for success.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 