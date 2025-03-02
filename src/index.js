import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  // Global settings
  duration: 800, // Slightly faster animations for better mobile performance
  once: true, // Animations occur only once
  mirror: false, // Whether elements should animate out while scrolling past them
  
  // Mobile optimization
  disable: false, // Never disable animations
  startEvent: 'DOMContentLoaded', // Name of the event dispatched on the document that AOS should initialize on
  offset: 120, // Offset (in px) from the original trigger point on mobile
  delay: 0, // Values from 0 to 3000, with step 50ms
  easing: 'ease', // Default easing for AOS animations
  
  // Anchor placements
  anchorPlacement: 'top-bottom', // Defines which position of the element regarding to window should trigger the animation
  
  // Responsive settings
  responsive: {
    0: {
      duration: 600, // Faster animations on mobile
      offset: 80 // Smaller offset on mobile
    },
    768: {
      duration: 800, // Default duration on tablets
      offset: 120
    },
    1024: {
      duration: 1000, // Slightly longer duration on desktop
      offset: 150
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
