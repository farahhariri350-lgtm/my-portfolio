import React from 'react';
import './Hero.css';
import heroMan from '../assets/hero-man.svg'; 
import vectorArrow from '../assets/vector-187.svg'; 
import doodlesBg from '../assets/doodles-mixed.svg';

const Hero = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    // التعديل هنا: استخدام process.env.PUBLIC_URL لضمان المسار الصحيح على GitHub Pages
    const fileName = "Farah_Sholi_Hariri_CV (2).pdf"; 
    const fileUrl = `${process.env.PUBLIC_URL}/${fileName}`;
    
    const link = document.createElement("a");
    link.href = fileUrl; 
    link.download = "Farah_Hariri_CV.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="hero-section" id="hero">
      <div className="center-line"></div>
      
      <nav className="navbar">
        <div className="logo">SaulDesign</div>
        <ul className="nav-links">
          <li onClick={() => scrollToSection('hero')} style={{cursor: 'pointer'}}>Home</li>
          <li onClick={() => scrollToSection('about')} style={{cursor: 'pointer'}}>About Me</li>
          <li onClick={() => scrollToSection('contact')} style={{cursor: 'pointer'}}>Contact</li>
        </ul>
      </nav>

      <img src={vectorArrow} className="floating-arrow" alt="Vector Arrow" />
      <div className="hero-text">
        <h1>CREATIVE UI <span>DESIGNER</span></h1>
        <div className="hero-btns">
          <button className="btn-fill" onClick={() => scrollToSection('contact')}>
            Hire me
          </button>
          <button className="btn-outline" onClick={handleDownloadCV}>
            Download CV ↓
          </button>
        </div>
      </div>

      <div className="hero-images-container">
        <img src={doodlesBg} className="hero-bg-shape" alt="bg" />
        <img src={heroMan} className="man-image" alt="man" />
        <div className="man-shadow"></div>
      </div>
    </section>
  );
};

export default Hero;