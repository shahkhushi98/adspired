import React from 'react';
import PropTypes from 'prop-types';

const ServiceCard = ({ service, variant = 'flip', animationDelay = 0 }) => {
  return (
    <div 
      className="service-card"
      data-variant={variant}
      data-aos="fade-up"
      data-aos-delay={animationDelay}
    >
      <div className="service-card-inner">
        <div className="service-card-front">
          <img 
            src={service.icon}
            alt={service.title}
            className="benefit-icon"
          />
          <h3>{service.title}</h3>
          <p>{service.shortDesc}</p>
        </div>
        <div className="service-card-back">
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      </div>
      {variant === 'simple' && (
        <>
          <p>{service.description}</p>
          <ul>
            {service.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    shortDesc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  variant: PropTypes.oneOf(['flip', 'simple']),
  animationDelay: PropTypes.number
};

export default ServiceCard; 