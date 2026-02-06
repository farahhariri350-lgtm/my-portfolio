import React from 'react';
import './Footer.css';
import Frame20 from '../assets/Frame 20.svg'; 
import Frame21 from '../assets/Frame 21.svg'; 
import Frame22 from '../assets/Frame 22.svg'; 
import Frame24 from '../assets/Frame 24.svg'; 
import Frame25 from '../assets/Frame 25.svg'; 
import Frame26 from '../assets/Frame 26.svg'; 
import Frame27 from '../assets/Frame 27.svg'; 

const Footer = () => {
  return (
    <footer className="footer-section">
         <div className="background-vertical-line"></div>
      <div className="footer-container">
      
     
        <div className="frame-23-nav">
          <a href="#hero"><img src={Frame20} alt="Home" className="nav-icon" /></a>
          <a href="#about"><img src={Frame21} alt="About me" className="nav-icon" /></a>
          <a href="#contact"><img src={Frame22} alt="Contact" className="nav-icon" /></a>
        </div>

        <div className="frame-28-socials">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <img src={Frame24} alt="Facebook" className="circle-social-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img src={Frame26} alt="Instagram" className="circle-social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <img src={Frame27} alt="Twitter" className="circle-social-icon" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <img src={Frame25} alt="YouTube" className="circle-social-icon" />
          </a>
        </div>

        <div className="policy-text">
          Terms of Service - Privacy Policy
        </div>

    

      </div>
    </footer>
  );
};

export default Footer;